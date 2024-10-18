'use client';
import { useEffect, useActionState, useContext } from 'react';
import { changePassword } from '@/app/data/actions/changePassword';
import { AlertBarContext } from '@/app/components/common/AlertBar';
import { ChangePasswordFormHeader } from './ChangePasswordFormHeader';
import { ChangePasswordFormAlert } from './ChangePasswordFormAlert';
import { ChangePasswordFormBody } from './ChangePasswordFormBody';
import { ChangePasswordFormInputs } from './ChangePasswordFormInputs';
import { ChangePasswordFormSubmit } from './ChangePasswordFormSubmit';

const ChangePasswordForm = () => {
  const [changePasswordState, formAction, isPending] = useActionState(changePassword, undefined);
  const { handleOpen, handleClose } = useContext(AlertBarContext);

  const generalErrorMessage =
    (changePasswordState?.status === 'error' &&
      !changePasswordState.errorField &&
      changePasswordState.message) ||
    undefined;

  const currentPasswordErrorMessage =
    (changePasswordState?.status === 'error' &&
      changePasswordState?.errorField === 'currentPassword' &&
      changePasswordState.message) ||
    undefined;

  const passwordErrorMessage =
    (changePasswordState?.status === 'error' &&
      changePasswordState?.errorField === 'password' &&
      changePasswordState.message) ||
    undefined;

  const confirmPasswordErrorMessage =
    (changePasswordState?.status === 'error' &&
      changePasswordState?.errorField === 'confirmPassword' &&
      changePasswordState.message) ||
    undefined;

  useEffect(() => {
    handleClose();

    if (changePasswordState?.status === 'success') {
      // Display an alert.
      handleOpen({
        message: changePasswordState.message,
        type: changePasswordState.status,
        openImmediately: true,
      });
    }
  }, [changePasswordState?.status, changePasswordState?.message, handleOpen, handleClose]);

  return (
    <form action={formAction}>
      <ChangePasswordFormHeader />
      <ChangePasswordFormBody>
        <ChangePasswordFormAlert errorMessage={generalErrorMessage} />
        <ChangePasswordFormInputs
          currentPasswordErrorMessage={currentPasswordErrorMessage}
          passwordErrorMessage={passwordErrorMessage}
          confirmPasswordErrorMessage={confirmPasswordErrorMessage}
          submitWasSuccessful={changePasswordState?.status === 'success'}
        />
        <ChangePasswordFormSubmit disabled={isPending} />
      </ChangePasswordFormBody>
    </form>
  );
};

export default ChangePasswordForm;
