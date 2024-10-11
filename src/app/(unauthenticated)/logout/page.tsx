'use client';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { logout } from '@/app/data/actions/logout';
import { useEffect } from 'react';

export default function LogoutPage() {
  useEffect(() => {
    logout();
  });

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" marginTop={6}>
        <CircularProgress />
      </Box>
    </Container>
  );
}
