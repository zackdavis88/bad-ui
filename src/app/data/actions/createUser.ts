'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { CreateUserResponse } from '@/app/data/apiTypes';

interface CreateUserState {
  status: 'success' | 'error';
  errorField?: 'username' | 'password' | 'confirmPassword';
  message: string;
}

export async function createUser(
  _prevState: CreateUserState | undefined,
  formData: FormData
): Promise<CreateUserState> {
  try {
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Some very basic, light, clientside validation
    if (
      typeof username !== 'string' ||
      typeof password !== 'string' ||
      typeof confirmPassword !== 'string'
    ) {
      throw new Error();
    }

    if (confirmPassword !== password) {
      return {
        status: 'error',
        errorField: 'confirmPassword',
        message: 'Password fields do not match',
      };
    }

    const { body } = await apiRequest<CreateUserResponse>('/users', {
      method: 'POST',
      body: {
        username,
        password,
      },
    });

    return {
      status: 'success',
      message: body.message,
    };
  } catch (error) {
    if (error instanceof ApiError && error.errorType === ErrorTypes.VALIDATION) {
      let errorField: 'username' | 'password' | undefined;

      if (error.message.startsWith('username')) {
        errorField = 'username';
      } else if (error.message.startsWith('password')) {
        errorField = 'password';
      }

      return {
        status: 'error',
        message: error.message,
        errorField,
      };
    }

    return {
      status: 'error',
      message: 'Something went wrong',
    };
  }
}
