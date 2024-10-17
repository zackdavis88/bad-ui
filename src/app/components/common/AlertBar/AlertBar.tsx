'use client';
import { useContext } from 'react';
import Container from '@mui/material/Container';
import { AlertBarContext } from './AlertBarProvider';
import Alert from '@mui/material/Alert';

const AlertBar = () => {
  const { isOpen, message, type, handleClose } = useContext(AlertBarContext);

  if (!isOpen) {
    return null;
  }

  return (
    <Container maxWidth="sm" sx={{ marginBottom: 2 }}>
      <Alert variant="filled" severity={type} onClose={handleClose}>
        {message}
      </Alert>
    </Container>
  );
};

export default AlertBar;
