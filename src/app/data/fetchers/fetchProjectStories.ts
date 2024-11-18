'use server';
import apiRequest from '@/app/data/utils/request';
import { GetProjectStoriesResponse } from '@/app/data/apiTypes';

export async function fetchProjectStories({
  projectId,
  page,
  itemsPerPage,
  titleFilter,
}: {
  projectId: string;
  page?: string;
  itemsPerPage?: string;
  titleFilter?: string;
}) {
  try {
    const query: Record<string, string> = {
      page: page?.toString() || '1',
      itemsPerPage: itemsPerPage?.toString() || '8',
      createdOnOrder: 'DESC',
    };

    if (titleFilter) {
      query.titleFilter = titleFilter;
    }

    const { body } = await apiRequest<GetProjectStoriesResponse>(`/projects/${projectId}/stories`, {
      query,
      next: {
        tags: [`storiesCache-${projectId}`],
        revalidate: 3600,
      },
    });

    return body;
  } catch (error) {
    throw error;
  }
}
