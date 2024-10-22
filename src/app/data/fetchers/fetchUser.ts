'use server';
import apiRequest from '@/app/data/utils/request';
import { GetUserResponse } from '@/app/data/apiTypes';

export async function fetchUser(username: string) {
  try {
    const { body } = await apiRequest<GetUserResponse>(`/users/${username}`, { cache: 'no-store' });

    return body;
  } catch (error) {
    throw error;
  }
}
