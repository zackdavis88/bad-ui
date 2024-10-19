'use client';
import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledModal } from '@/app/components/common/StyledModal';
import { RemoveProjectForm } from './RemoveProjectForm';

const RemoveProjectButton = ({
  disabled,
  projectName,
  projectId,
}: {
  disabled: boolean;
  projectName: string;
  projectId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Box sx={{ marginBottom: { xs: 2, sm: 0 } }}>
      {disabled ? (
        <Tooltip title="You don't have permission to do this">
          <span>
            <Button variant="contained" color="error" disabled>
              <DeleteIcon />
              &nbsp;Remove
            </Button>
          </span>
        </Tooltip>
      ) : (
        <>
          <Button variant="contained" color="error" onClick={handleOpen}>
            <DeleteIcon />
            &nbsp;Remove
          </Button>
          <StyledModal
            isOpen={isOpen}
            handleClose={handleClose}
            ariaDescribedBy="remove-project-description"
            ariaLabelledBy="remove-project-title"
          >
            <RemoveProjectForm
              projectName={projectName}
              projectId={projectId}
              handleClose={handleClose}
            />
          </StyledModal>
        </>
      )}
    </Box>
  );
};

export default RemoveProjectButton;
