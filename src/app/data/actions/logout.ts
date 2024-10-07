'use server';
import { signOut } from '@/auth';

export async function logout() {
  try {
    await signOut({ redirect: true, redirectTo: '/' });
  } catch (error) {
    throw error;
  }
}
