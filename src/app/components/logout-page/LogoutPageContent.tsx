'use client';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { logout } from '@/app/data/actions/logout';

const LogoutPageContent = () => {
  useEffect(() => {
    logout();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    </Container>
  );
};

export default LogoutPageContent;
