'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { EditStatusResponse } from '@/app/data/apiTypes';
import { revalidateTag } from 'next/cache';

interface EditStatusState {
  status: 'success' | 'error';
  message: string;
  errorField?: 'name';
}

class ClientValidationError extends Error {
  errorField: EditStatusState['errorField'];

  constructor({ message }: { message: string }) {
    super(message);
    this.errorField = 'name';
  }
}

export async function editStatus(
  {
    projectId,
    statusId,
  }: {
    projectId: string;
    statusId: string;
  },
  _prevState: EditStatusState | undefined,
  formData: FormData
): Promise<EditStatusState> {
  try {
    const name = formData.get('name');

    // Some client validation that matches what the API does, to cut down on the amount of requests
    // that will get rejected from the API.
    if (typeof name !== 'string') {
      throw new Error();
    }

    if (name.length < 1 || name.length > 50) {
      throw new ClientValidationError({ message: 'Name must be 1 - 50 characters in length' });
    }

    // Send off the request to the API.
    const { body } = await apiRequest<EditStatusResponse>(
      `/projects/${projectId}/statuses/${statusId}`,
      {
        method: 'POST',
        body: {
          name,
        },
      }
    );

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
