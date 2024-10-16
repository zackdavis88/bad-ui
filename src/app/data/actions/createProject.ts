'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { CreateProjectResponse } from '@/app/data/apiTypes';
import { revalidatePath } from 'next/cache';

interface CreateProjectState {
  status: 'success' | 'error';
  errorField?: 'name' | 'description';
  message: string;
}

export async function createProject(
  _prevState: CreateProjectState | undefined,
  formData: FormData
): Promise<CreateProjectState> {
  try {
    const name = formData.get('name');
    const description = formData.get('description');
    const createDefaultStatuses = formData.get('createDefaultStatuses') === 'on';

    // Some client validation that matches what the API does, to cut down on the amount of requests
    // that will get rejected from the API.
    if (typeof name !== 'string') {
      throw new Error();
    }

    if (name.length < 3 || name.length > 30) {
      return {
        status: 'error',
        errorField: 'name',
        message: 'Name must be 3 - 30 characters in length',
      };
    }

    if (!new RegExp('^[A-Za-z0-9-_+=&^%$#*@!|/(){}?.,<>;\':" ]+$').test(name)) {
      return {
        status: 'error',
        errorField: 'name',
        message: 'Name contains invalid characters',
      };
    }

    if (typeof description === 'string' && description.length > 350) {
      return {
        status: 'error',
        errorField: 'description',
        message: 'Description must be 350 characters or less',
      };
    }

    // Send off the request to the API.
    const { body } = await apiRequest<CreateProjectResponse>('/projects', {
      method: 'POST',
      body: {
        name,
        description,
      },
      query: {
        createDefaultStatuses: createDefaultStatuses.toString(),
      },
    });

    revalidatePath('/dashboard');

    return {
      status: 'success',
      message: body.message,
    };
  } catch (error) {
    if (error instanceof ApiError && error.errorType === ErrorTypes.VALIDATION) {
      let errorField: 'name' | 'description' | undefined;

      if (error.message.startsWith('name')) {
        errorField = 'name';
      } else if (error.message.startsWith('description')) {
        errorField = 'description';
      }

      return {
        status: 'error',
        message: error.message,
        errorField,
      };
    }

    return {
      status: 'error',
      message: 'Something went wrong',
    };
  }
}
