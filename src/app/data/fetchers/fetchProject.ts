'use server';
import apiRequest from '@/app/data/utils/request';
import { GetProjectResponse } from '@/app/data/apiTypes';

export async function fetchProject({ projectId }: { projectId: string }) {
  try {
    const { body } = await apiRequest<GetProjectResponse>(`/projects/${projectId}`, {
      next: { tags: [`project-${projectId}`] },
    });

    return body;
  } catch (error) {
    throw error;
  }
}
