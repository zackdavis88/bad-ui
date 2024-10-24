'use server';
import apiRequest from '@/app/data/utils/request';
import { GetProjectMembershipsResponse } from '@/app/data/apiTypes';

export async function fetchProjectMemberships({
  projectId,
  page,
  itemsPerPage,
  usernameFilter,
}: {
  projectId: string;
  page?: string;
  itemsPerPage?: string;
  usernameFilter?: string;
}) {
  try {
    const query: Record<string, string> = {
      page: page?.toString() || '1',
      itemsPerPage: itemsPerPage?.toString() || '8',
      createdOnOrder: 'DESC',
    };

    if (usernameFilter) {
      query.usernameFilter = usernameFilter;
    }

    const { body } = await apiRequest<GetProjectMembershipsResponse>(
      `/projects/${projectId}/memberships`,
      {
        query,
        next: {
          tags: [`membershipsCache-${projectId}`],
          revalidate: 3600,
        },
      }
    );

    return body;
  } catch (error) {
    throw error;
  }
}
