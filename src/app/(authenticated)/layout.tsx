import Box from '@mui/material/Box';
import { AuthenticatedNavbar } from '@/app/components/Navbar';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box display="flex" flexDirection="column" width="100%" height="100%">
      <AuthenticatedNavbar />
      <Box display="flex" flexDirection="column" flexGrow={1} component="main">
        {children}
      </Box>
    </Box>
  );
}
