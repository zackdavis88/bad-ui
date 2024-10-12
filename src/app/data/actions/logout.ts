'use server';
import { signOut } from '@/app/data/auth/auth';
import { ROUTES } from '@/app/constants/routes';

export async function logout() {
  try {
    await signOut({ redirect: true, redirectTo: ROUTES.LOGIN });
  } catch (error) {
    throw error;
  }
}
