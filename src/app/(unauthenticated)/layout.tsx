import Box from '@mui/material/Box';
import { UnauthenticatedNavbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { AlertBarProvider, AlertBar } from '@/app/components/general/AlertBar';

export default function UnauthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <UnauthenticatedNavbar />
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
          {children}
        </AlertBarProvider>
      </Box>
      <Footer />
    </Box>
  );
}
