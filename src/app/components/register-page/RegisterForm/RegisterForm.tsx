'use client';
import { useEffect, useActionState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '@/app/data/actions/createUser';
import { AlertBarContext } from '@/app/components/general/AlertBar';
import RegisterFormHeader from './components/RegisterFormHeader';
import RegisterFormAlert from './components/RegisterFormAlert';
import RegisterFormBody from './components/RegisterFormBody';
import RegisterFormInputs from './components/RegisterFormInputs';
import RegisterFormSubmit from './components/RegisterFormSubmit';

const RegisterForm = () => {
  const router = useRouter();
  const [createUserState, formAction, isPending] = useActionState(createUser, undefined);
  const { handleOpen } = useContext(AlertBarContext);

  const generalErrorMessage =
    (createUserState?.status === 'error' &&
      !createUserState.errorField &&
      createUserState.message) ||
    undefined;

  const usernameErrorMessage =
    (createUserState?.status === 'error' &&
      createUserState?.errorField === 'username' &&
      createUserState.message) ||
    undefined;

  const passwordErrorMessage =
    (createUserState?.status === 'error' &&
      createUserState?.errorField === 'password' &&
      createUserState.message) ||
    undefined;

  const confirmPasswordErrorMessage =
    (createUserState?.status === 'error' &&
      createUserState?.errorField === 'confirmPassword' &&
      createUserState.message) ||
    undefined;

  const submitDisabled = isPending || createUserState?.status === 'success';

  useEffect(() => {
    if (createUserState?.status === 'success') {
      // Queue an alert.
      handleOpen({
        message: createUserState.message,
        type: createUserState.status,
        // Logic within the AlertBarProvider will automatically open the Alert on the next route change, if a message is queued.
        openImmediately: false,
      });

      // Navigate back to the login page, since this is a route change the AlertBar will now show the message we queued above.
      router.push('/');
    }
  }, [createUserState?.status, createUserState?.message, handleOpen, router]);

  return (
    <form action={formAction}>
      <RegisterFormHeader />
      <RegisterFormBody>
        <RegisterFormAlert errorMessage={generalErrorMessage} />
        <RegisterFormInputs
          usernameErrorMessage={usernameErrorMessage}
          passwordErrorMessage={passwordErrorMessage}
          confirmPasswordErrorMessage={confirmPasswordErrorMessage}
        />
        <RegisterFormSubmit disabled={submitDisabled} />
      </RegisterFormBody>
    </form>
  );
};

export default RegisterForm;
