'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { CreateStoryResponse } from '@/app/data/apiTypes';
import { revalidateTag } from 'next/cache';

interface CreateStoryState {
  status: 'success' | 'error';
  message: string;
  errorField?: 'title' | 'details';
}

class ClientValidationError extends Error {
  errorField?: CreateStoryState['errorField'];

  constructor({
    message,
    errorField,
  }: {
    message: string;
    errorField?: CreateStoryState['errorField'];
  }) {
    super(message);
    this.errorField = errorField;
  }
}

export async function createStory(
  {
    projectId,
  }: {
    projectId: string;
  },
  _prevState: CreateStoryState | undefined,
  formData: FormData
): Promise<CreateStoryState> {
  try {
    const title = formData.get('title');
    const details = formData.get('details');

    // Some client validation that matches what the API does, to cut down on the amount of requests
    // that will get rejected from the API.
    if (typeof title !== 'string' || typeof details !== 'string') {
      throw new Error();
    }

    if (title.length < 1 || title.length > 150) {
      throw new ClientValidationError({
        message: 'Title must be 1 - 150 characters in length',
        errorField: 'title',
      });
    }

    // Send off the request to the API.
    const { body } = await apiRequest<CreateStoryResponse>(`/projects/${projectId}/stories`, {
      method: 'POST',
      body: {
        title,
        details,
      },
    });

    revalidateTag(`storiesCache-${projectId}`);

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
      return {
        status: 'error',
        message: error.message,
      };
    }

    return {
      status: 'error',
      message: 'Something went wrong, please refresh the page or try again later',
    };
  }
}
