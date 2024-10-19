'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { CreateProjectResponse } from '@/app/data/apiTypes';
import { revalidatePath } from 'next/cache';
import { ROUTES } from '@/app/constants/routes';

interface CreateProjectState {
  status: 'success' | 'error';
  errorField?: 'name' | 'description';
  message: string;
}

class ClientValidationError extends Error {
  errorField: CreateProjectState['errorField'];

  constructor({
    message,
    errorField,
  }: {
    message: string;
    errorField: CreateProjectState['errorField'];
  }) {
    super(message);
    this.errorField = errorField;
  }
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
      throw new ClientValidationError({
        message: 'Name must be 3 - 30 characters in length',
        errorField: 'name',
      });
    }

    if (!new RegExp('^[A-Za-z0-9-_+=&^%$#*@!|/(){}?.,<>;\':" ]+$').test(name)) {
      throw new ClientValidationError({
        message: 'Name contains invalid characters',
        errorField: 'name',
      });
    }

    if (typeof description === 'string' && description.length > 350) {
      throw new ClientValidationError({
        message: 'Description must be 350 characters or less',
        errorField: 'description',
      });
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

    revalidatePath(ROUTES.DASHBOARD);

    return {
      status: 'success',
      message: body.message,
    };
  } catch (error) {
    if (error instanceof ClientValidationError) {
      return {
        status: 'error',
        errorField: error.errorField,
        message: error.message,
      };
    }

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
      message: 'Something went wrong, please refresh the page or try again later',
    };
  }
}
