'use client';
import { useActionState } from 'react';
import { login } from '@/app/data/actions/login';
import LoginFormHeader from './components/LoginFormHeader';
import LoginFormBody from './components/LoginFormBody';
import LoginFormAlert from './components/LoginFormAlert';
import LoginFormInputs from './components/LoginFormInputs';
import LoginFormSubmit from './components/LoginFormSubmit';

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
