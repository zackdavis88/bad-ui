import { Metadata } from 'next';
import { LoginPageContent } from '@/app/components/login-page';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return <LoginPageContent />;
}
