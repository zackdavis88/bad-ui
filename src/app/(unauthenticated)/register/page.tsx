import Container from '@mui/material/Container';
import { RegisterForm } from '@/app/components/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
};

export default function RegisterPage() {
  return (
    <Container maxWidth="sm">
      <RegisterForm />
    </Container>
  );
}
