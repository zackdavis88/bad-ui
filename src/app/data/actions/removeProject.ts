'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { RemoveProjectResponse } from '@/app/data/apiTypes';
import { revalidatePath } from 'next/cache';

interface RemoveProjectState {
  status: 'success' | 'error';
  message: string;
}

export async function removeProject(
  projectId: string,
  _prevState: RemoveProjectState | undefined,
  formData: FormData
): Promise<RemoveProjectState> {
  try {
    const name = formData.get('name');

    if (typeof name !== 'string') {
      throw new Error();
    }

    // Send off the request to the API.
    const { body } = await apiRequest<RemoveProjectResponse>(`/projects/${projectId}`, {
      method: 'DELETE',
      body: {
        confirm: name,
      },
    });

    revalidatePath('/dashboard');

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
