'use server';
import apiRequest from '@/app/data/utils/request';
import { GetUserResponse } from '@/app/data/apiTypes';

export async function fetchUser(username: string) {
  try {
    /**
     * Since this request is ran on-demand during the AddMembership flow, we want up-to-date user data
     * instead of the possibility of stale caching.
     */
    const { body } = await apiRequest<GetUserResponse>(`/users/${username}`, { cache: 'no-store' });

    return body;
  } catch (error) {
    throw error;
  }
}
