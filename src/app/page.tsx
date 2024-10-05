import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { UnauthenticatedNavbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { LoginForm } from '@/app/components/LoginForm';

export default function LoginPage() {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <UnauthenticatedNavbar />
      <Box
        display="flex"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        component="main"
        paddingX={1}
        width="100%"
      >
        <Container maxWidth="sm">
          <LoginForm />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
