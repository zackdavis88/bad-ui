'use client';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { UnauthenticatedNavbar } from '@/app/components/Navbar';
import { logout } from '@/app/data/actions/logout';
import { useEffect } from 'react';

export default function LogoutPage() {
  useEffect(() => {
    logout();
  });
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <UnauthenticatedNavbar />
      <Box display="flex" justifyContent="center" marginTop={6}>
        <CircularProgress />
      </Box>
    </Box>
  );
}
