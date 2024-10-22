'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { UpdateProjectResponse } from '@/app/data/apiTypes';
import { revalidateTag } from 'next/cache';

interface CreateProjectState {
  status: 'success' | 'error';
  errorField?: 'name' | 'description';
  message: string;
}

interface CurrentProjectData {
  projectId: string;
  projectName: string;
  projectDescription: string;
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

export async function editProject(
  { projectId, projectName, projectDescription }: CurrentProjectData,
  _prevState: CreateProjectState | undefined,
  formData: FormData
): Promise<CreateProjectState> {
  try {
    const name = formData.get('name');
    const description = formData.get('description');

    // Some client validation that matches what the API does, to cut down on the amount of requests
    // that will get rejected from the API.
    if (typeof name !== 'string' || typeof description !== 'string') {
      throw new Error();
    }

    // If new values are the same as current values, short circuit everything and return a success response
    if (name === projectName && description === projectDescription) {
      return {
        status: 'success',
        message: 'No update data provided',
      };
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
    const { body } = await apiRequest<UpdateProjectResponse>(`/projects/${projectId}`, {
      method: 'POST',
      body: {
        name: name.trim(),
        description: (typeof description === 'string' && description.trim()) || description,
      },
    });

    revalidateTag(`project-${projectId}`);

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
