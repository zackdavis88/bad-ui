'use client';
import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { StyledModal } from '@/app/components/common/StyledModal';
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
      <StyledModal
        isOpen={isOpen}
        handleClose={handleClose}
        ariaLabelledBy="create-project-title"
        ariaDescribedBy="create-project-description"
      >
        <CreateProjectForm handleClose={handleClose} />
      </StyledModal>
    </>
  );
};

export default CreateProjectButton;
