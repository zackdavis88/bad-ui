import { Metadata } from 'next';
import Container from '@mui/material/Container';
import { LogoutSpinner } from '@/app/components/LogoutSpinner';

export const metadata: Metadata = {
  title: 'Logout',
};

export default function LogoutPage() {
  return (
    <Container maxWidth="sm">
      <LogoutSpinner />
    </Container>
  );
}
