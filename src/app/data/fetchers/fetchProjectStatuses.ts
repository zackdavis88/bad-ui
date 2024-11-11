'use server';
import apiRequest from '@/app/data/utils/request';
import { GetProjectStatusesResponse } from '@/app/data/apiTypes';

export async function fetchProjectStatuses({
  projectId,
  page,
  itemsPerPage,
  nameFilter,
}: {
  projectId: string;
  page?: string;
  itemsPerPage?: string;
  nameFilter?: string;
}) {
  try {
    const query: Record<string, string> = {
      page: page?.toString() || '1',
      itemsPerPage: itemsPerPage?.toString() || '8',
      createdOnOrder: 'DESC',
    };

    if (nameFilter) {
      query.nameFilter = nameFilter;
    }

    const { body } = await apiRequest<GetProjectStatusesResponse>(
      `/projects/${projectId}/statuses`,
      {
        query,
        next: {
          tags: [`statusesCache-${projectId}`],
          revalidate: 3600,
        },
      }
    );

    return body;
  } catch (error) {
    throw error;
  }
}
