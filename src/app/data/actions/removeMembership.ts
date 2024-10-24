'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { MembershipData, UpdateMembershipResponse } from '@/app/data/apiTypes';
import { revalidateTag } from 'next/cache';
import { auth } from '@/app/data/auth/auth';

interface RemoveMembershipState {
  status: 'success' | 'error';
  message: string;
}

class ClientValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export async function removeMembership(
  projectId: string,
  membership: Omit<MembershipData, 'project'>,
  _prevState: RemoveMembershipState | undefined,
  formData: FormData
): Promise<RemoveMembershipState> {
  try {
    const confirmMembershipRemoval = formData.get('confirmMembershipRemoval') === 'on';

    // Some client validation that matches what the API does, to cut down on the amount of requests
    // that will get rejected from the API.
    if (confirmMembershipRemoval !== true) {
      throw new Error();
    }

    const displayName = (await auth())?.user?.name;
    if (displayName?.toLowerCase() === membership.user.displayName.toLowerCase()) {
      throw new ClientValidationError('You cannot remove your own membership');
    }

    // Send off the request to the API.
    const { body } = await apiRequest<UpdateMembershipResponse>(
      `/projects/${projectId}/memberships/${membership.id}`,
      {
        method: 'DELETE',
        body: {
          confirm: confirmMembershipRemoval,
        },
      }
    );

    revalidateTag(`membershipsCache-${projectId}`);

    return {
      status: 'success',
      message: body.message,
    };
  } catch (error) {
    if (error instanceof ClientValidationError) {
      return {
        status: 'error',
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
