'use server';
import apiRequest from '@/app/data/utils/request';
import { GetDashboardProjectsResponse } from '@/app/data/apiTypes';

export async function fetchDashboardProjects({
  page,
  itemsPerPage,
}: {
  page?: string;
  itemsPerPage?: string;
}) {
  try {
    const { body } = await apiRequest<GetDashboardProjectsResponse>('/dashboard/projects', {
      query: {
        page: page?.toString() || '1',
        itemsPerPage: itemsPerPage?.toString() || '10',
      },
    });

    return body;
  } catch (error) {
    throw error;
  }
}
