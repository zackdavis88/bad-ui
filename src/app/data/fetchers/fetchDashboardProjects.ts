'use server';
import apiRequest from '@/app/data/utils/request';
import { GetDashboardProjectsResponse } from '@/app/data/apiTypes';

export async function fetchDashboardProjects() {
  try {
    const { body } = await apiRequest<GetDashboardProjectsResponse>('/dashboard/projects');

    return body;
  } catch (error) {
    throw error;
  }
}
