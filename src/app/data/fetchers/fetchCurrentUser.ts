'use server';
import { auth } from '@/auth';

export async function fetchCurrentUser() {
  try {
    const displayName = (await auth())?.user?.name;

    if (!displayName) {
      throw new Error('Could not fetch authenticated user');
    }

    return displayName;
  } catch (error) {
    throw error;
  }
}
