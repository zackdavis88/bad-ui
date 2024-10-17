import { Metadata } from 'next';
import Container from '@mui/material/Container';
import { LoginForm } from '@/app/components/LoginForm';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <Container maxWidth="sm">
      <LoginForm />
    </Container>
  );
}
