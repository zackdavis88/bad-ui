'use server';
import apiRequest, { ApiError, ErrorTypes } from '@/app/data/utils/request';
import { auth } from '@/app/data/auth/auth';
import { ChangePasswordResponse } from '@/app/data/apiTypes';

interface ChangePasswordState {
  status: 'success' | 'error';
  errorField?: 'currentPassword' | 'password' | 'confirmPassword';
  message: string;
}

export async function changePassword(
  _prevState: ChangePasswordState | undefined,
  formData: FormData
): Promise<ChangePasswordState> {
  try {
    const currentPassword = formData.get('currentPassword');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Some client validation that matches what the API does, to cut down on the amount of requests
    // that will get rejected from the API.
    if (
      typeof currentPassword !== 'string' ||
      typeof password !== 'string' ||
      typeof confirmPassword !== 'string'
    ) {
      throw new Error();
    }

    if (password.length < 8) {
      return {
        status: 'error',
        errorField: 'password',
        message: 'Password must be at least 8 characters in length',
      };
    }

    if (!new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$').test(password)) {
      return {
        status: 'error',
        errorField: 'password',
        message: 'Password must have 1 uppercase, lowercase, and number character',
      };
    }

    if (confirmPassword !== password) {
      return {
        status: 'error',
        errorField: 'confirmPassword',
        message: 'Password fields do not match',
      };
    }

    // Send off the request to the API.
    const displayName = (await auth())?.user?.name;
    if (!displayName) {
      return {
        status: 'error',
        message: 'Authenticated user not found',
      };
    }
    await apiRequest<ChangePasswordResponse>(`/users/${displayName}`, {
      method: 'POST',
      body: {
        currentPassword,
        newPassword: password,
      },
    });

    return {
      status: 'success',
      message: 'Password has been successfully updated',
    };
  } catch (error) {
    if (error instanceof ApiError && error.errorType === ErrorTypes.VALIDATION) {
      let errorField: 'currentPassword' | 'password' | undefined;
      let message = error.message;

      if (error.message.startsWith('currentPassword')) {
        errorField = 'currentPassword';
        message = error.message.replace('currentPassword', 'Current password');
      } else if (error.message.startsWith('newPassword')) {
        errorField = 'password';
        message = error.message.replace('newPassword', 'Password');
      }

      return {
        status: 'error',
        message,
        errorField,
      };
    }

    return {
      status: 'error',
      message: 'Something went wrong',
    };
  }
}
