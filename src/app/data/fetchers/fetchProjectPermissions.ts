'use server';
import apiRequest from '@/app/data/utils/request';
import { GetProjectPermissionsResponse } from '@/app/data/apiTypes';

export async function fetchProjectPermissions({ projectId }: { projectId: string }) {
  try {
    const { body } = await apiRequest<GetProjectPermissionsResponse>(
      `/projects/${projectId}/permissions`
    );

    return body;
  } catch (error) {
    throw error;
  }
}
