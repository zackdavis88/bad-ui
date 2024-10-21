'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { CreateMembershipResponse } from '@/app/data/apiTypes';
import { revalidateTag } from 'next/cache';

interface CreateMembershipState {
  status: 'success' | 'error';
  message: string;
}

export async function createMembership(
  projectId: string,
  _prevState: CreateMembershipState | undefined,
  formData: FormData
): Promise<CreateMembershipState> {
  try {
    const username = formData.get('username');
    const membershipRole = formData.get('membershipRole');

    // Some client validation that matches what the API does, to cut down on the amount of requests
    // that will get rejected from the API.
    if (typeof username !== 'string' || typeof membershipRole !== 'string') {
      throw new Error();
    }

    // Send off the request to the API.
    const { body } = await apiRequest<CreateMembershipResponse>(
      `/projects/${projectId}/memberships`,
      {
        method: 'POST',
        body: {
          username,
          [membershipRole]: true,
        },
      }
    );

    revalidateTag(`membershipsCache-${projectId}`);

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
