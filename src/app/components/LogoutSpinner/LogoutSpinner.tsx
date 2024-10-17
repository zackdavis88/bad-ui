'use client';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { logout } from '@/app/data/actions/logout';

const LogoutSpinner = () => {
  useEffect(() => {
    logout();
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};

export default LogoutSpinner;
