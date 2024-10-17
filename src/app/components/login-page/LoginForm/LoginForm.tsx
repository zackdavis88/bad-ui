'use client';
import { useActionState } from 'react';
import { login } from '@/app/data/actions/login';
import { LoginFormHeader } from './LoginFormHeader';
import { LoginFormBody } from './LoginFormBody';
import { LoginFormAlert } from './LoginFormAlert';
import { LoginFormInputs } from './LoginFormInputs';
import { LoginFormSubmit } from './LoginFormSubmit';

const LoginForm = () => {
  const [errorMessage, formAction, isPending] = useActionState(login, undefined);

  return (
    <form action={formAction}>
      <LoginFormHeader />
      <LoginFormBody>
        <LoginFormAlert errorMessage={errorMessage} />
        <LoginFormInputs />
        <LoginFormSubmit disabled={isPending} />
      </LoginFormBody>
    </form>
  );
};

export default LoginForm;
