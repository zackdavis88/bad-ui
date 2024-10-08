import { auth } from '@/auth';
import { Session } from 'next-auth';

interface SessionWithAuthToken extends Session {
  authToken?: string;
}

export enum ErrorTypes {
  FATAL = 'FATAL',
  VALIDATION = 'VALIDATION',
  NOT_FOUND = 'NOT_FOUND',
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
}

export class ApiError extends Error {
  errorType: ErrorTypes;

  constructor(message: string, errorType: ErrorTypes) {
    super(message);
    this.errorType = errorType;
  }
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
  const authToken = ((await auth()) as SessionWithAuthToken)?.authToken;

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

  if (!response.ok) {
    const body = await response.json();
    throw new ApiError(
      body.error || 'An unknown error has occurred',
      body.errorType || ErrorTypes.FATAL
    );
  }

  return { response, body: (await response.json()) as T };
}
