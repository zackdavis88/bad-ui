'use server';
import { signIn } from '@/app/data/auth/auth';
import { AuthError } from 'next-auth';

export async function login(_prevState: string | undefined, formData: FormData) {
  try {
    const username = formData.get('username');
    const password = formData.get('password');

    await signIn('credentials', { redirectTo: '/dashboard', username, password });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
