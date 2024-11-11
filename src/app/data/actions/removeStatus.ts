'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { RemoveStatusResponse } from '@/app/data/apiTypes';
import { revalidateTag } from 'next/cache';

interface RemoveStatusState {
  status: 'success' | 'error';
  message: string;
}

export async function removeStatus(
  {
    projectId,
    statusId,
  }: {
    projectId: string;
    statusId: string;
  },
  _prevState: RemoveStatusState | undefined,
  formData: FormData
): Promise<RemoveStatusState> {
  try {
    const confirmStatusRemoval = formData.get('confirmStatusRemoval') === 'on';

    // Some client validation that matches what the API does, to cut down on the amount of requests
    // that will get rejected from the API.
    if (!confirmStatusRemoval) {
      throw new Error();
    }

    // Send off the request to the API.
    const { body } = await apiRequest<RemoveStatusResponse>(
      `/projects/${projectId}/statuses/${statusId}`,
      {
        method: 'DELETE',
        body: {
          confirm: confirmStatusRemoval,
        },
      }
    );

    revalidateTag(`statusesCache-${projectId}`);

    return {
      status: 'success',
      message: body.message,
    };
  } catch (error) {
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
