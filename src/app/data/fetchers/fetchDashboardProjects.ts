'use server';
import apiRequest from '@/app/data/utils/request';
import { GetDashboardProjectsResponse } from '@/app/data/apiTypes';

export async function fetchDashboardProjects({
  page,
  itemsPerPage,
  projectName,
}: {
  page?: string;
  itemsPerPage?: string;
  projectName?: string;
}) {
  try {
    const query: Record<string, string> = {
      page: page?.toString() || '1',
      itemsPerPage: itemsPerPage?.toString() || '8',
    };

    if (projectName) {
      query.nameFilter = projectName;
    }

    const { body } = await apiRequest<GetDashboardProjectsResponse>('/dashboard/projects', {
      query,
    });

    return body;
  } catch (error) {
    throw error;
  }
}
