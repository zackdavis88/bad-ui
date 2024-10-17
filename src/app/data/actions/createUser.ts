'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { CreateUserResponse } from '@/app/data/apiTypes';

interface CreateUserState {
  status: 'success' | 'error';
  errorField?: 'username' | 'password' | 'confirmPassword';
  message: string;
}

class ClientValidationError extends Error {
  errorField: CreateUserState['errorField'];

  constructor({
    message,
    errorField,
  }: {
    message: string;
    errorField: CreateUserState['errorField'];
  }) {
    super(message);
    this.errorField = errorField;
  }
}

export async function createUser(
  _prevState: CreateUserState | undefined,
  formData: FormData
): Promise<CreateUserState> {
  try {
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Some client validation that matches what the API does, to cut down on the amount of requests
    // that will get rejected from the API.
    if (
      typeof username !== 'string' ||
      typeof password !== 'string' ||
      typeof confirmPassword !== 'string'
    ) {
      throw new Error();
    }

    if (username.length < 3 || username.length > 30) {
      throw new ClientValidationError({
        message: 'Username must be 3 - 30 characters in length',
        errorField: 'username',
      });
    }

    if (!new RegExp('^[A-Za-z0-9-_]+$').test(username)) {
      throw new ClientValidationError({
        message: 'Username may only contain alphanumeric, - (dash), and _ (underscore) characters',
        errorField: 'username',
      });
    }

    if (password.length < 8) {
      throw new ClientValidationError({
        message: 'Password must be at least 8 characters in length',
        errorField: 'password',
      });
    }

    if (!new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$').test(password)) {
      throw new ClientValidationError({
        message: 'Password must have 1 uppercase, lowercase, and number character',
        errorField: 'password',
      });
    }

    if (confirmPassword !== password) {
      throw new ClientValidationError({
        message: 'Password fields do not match',
        errorField: 'confirmPassword',
      });
    }

    // Send off the request to the API.
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
    if (error instanceof ClientValidationError) {
      return {
        status: 'error',
        errorField: error.errorField,
        message: error.message,
      };
    }

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
      message: 'Something went wrong, please refresh the page or try again later',
    };
  }
}
