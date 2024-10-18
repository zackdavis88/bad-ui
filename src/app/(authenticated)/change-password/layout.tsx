import Box from '@mui/material/Box';
import { AlertBar, AlertBarProvider } from '@/app/components/common/AlertBar';

export default function ChangePasswordLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display="flex"
      flexGrow={1}
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
  );
}
