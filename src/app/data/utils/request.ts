import { auth } from '@/auth';
import { Session } from 'next-auth';

interface SessionWithAuthToken extends Session {
  authToken?: string;
}

export default async function apiRequest<T>(
  path: string,
  options?: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: Record<string, unknown>;
  }
) {
  const apiUrl = process.env.API_URL || 'http://localhost:3000';
  const authToken = ((await auth()) as SessionWithAuthToken).authToken;

  const requestHeaders: Record<string, string> = {
    ...(options?.headers || {}),
    'Content-Type': 'application/json',
  };
  if (authToken) {
    requestHeaders['x-auth-token'] = authToken;
  }

  const response = await fetch(`${apiUrl}${path}`, {
    method: options?.method || 'GET',
    headers: requestHeaders,
    body: options?.body ? JSON.stringify(options.body) : undefined,
  });

  return { response, body: (await response.json()) as T };
}
