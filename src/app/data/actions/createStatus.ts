'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { CreateStatusResponse } from '@/app/data/apiTypes';
import { revalidateTag } from 'next/cache';

interface CreateStatusState {
  status: 'success' | 'error';
  message: string;
  errorField?: 'name';
}

class ClientValidationError extends Error {
  errorField: CreateStatusState['errorField'];

  constructor({ message }: { message: string }) {
    super(message);
    this.errorField = 'name';
  }
}

export async function createStatus(
  {
    projectId,
    statusCount,
  }: {
    projectId: string;
    statusCount: number;
  },
  _prevState: CreateStatusState | undefined,
  formData: FormData
): Promise<CreateStatusState> {
  try {
    const name = formData.get('name');

    // Some client validation that matches what the API does, to cut down on the amount of requests
    // that will get rejected from the API.
    if (typeof name !== 'string') {
      throw new Error();
    }

    if (statusCount >= 100) {
      throw new ClientValidationError({
        message: 'Project has exceeded status limit of 100',
      });
    }

    if (name.length < 1 || name.length > 50) {
      throw new ClientValidationError({ message: 'Name must be 1 - 50 characters in length' });
    }

    // Send off the request to the API.
    const { body } = await apiRequest<CreateStatusResponse>(`/projects/${projectId}/statuses`, {
      method: 'POST',
      body: {
        name,
      },
    });

    revalidateTag(`statusesCache-${projectId}`);

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
