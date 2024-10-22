'use client';
import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import { CreateProjectForm } from './CreateProjectForm';

const CreateProjectButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen}>
        <AddIcon fontSize="small" />
        New Project
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="create-project-title"
        aria-describedby="create-project-description"
        fullWidth
        maxWidth="sm"
      >
        <CreateProjectForm handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default CreateProjectButton;
