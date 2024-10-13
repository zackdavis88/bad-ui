import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AlertBar, AlertBarProvider } from '@/app/components/AlertBar';
import { ChangePasswordForm } from '@/app/components/ChangePasswordForm';

export default async function ChangePasswordPage() {
  return (
    <Box
      display="flex"
      flexGrow={1}
      component="main"
      paddingX={1}
      width="100%"
      paddingTop={1}
      flexDirection="column"
    >
      <AlertBarProvider>
        <Box display="flex" height="120px" alignItems="flex-end">
          <AlertBar />
        </Box>
        <Container maxWidth="sm">
          <ChangePasswordForm />
        </Container>
      </AlertBarProvider>
    </Box>
  );
}
