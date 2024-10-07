'use server';
import apiRequest from '@/app/data/utils/request';
import { GetProjectsResponse } from '@/app/data/apiTypes';

export async function fetchProjects() {
  try {
    const { body } = await apiRequest<GetProjectsResponse>('/projects');

    return body;
  } catch (error) {
    throw error;
  }
}
