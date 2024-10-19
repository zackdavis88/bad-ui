'use client';
import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { StyledModal } from '@/app/components/common/StyledModal';
import { EditProjectForm } from './EditProjectForm';

const EditProjectButton = ({
  disabled,
  projectName,
  projectDescription,
  projectId,
}: {
  disabled: boolean;
  projectName: string;
  projectDescription: string;
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
    <Box sx={{ marginRight: { xs: 0, sm: 2 } }}>
      {disabled ? (
        <Tooltip title="You don't have permission to do this">
          <span>
            <Button variant="contained" color="info" disabled>
              <EditIcon />
              &nbsp;Edit
            </Button>
          </span>
        </Tooltip>
      ) : (
        <>
          <Button variant="contained" color="info" onClick={handleOpen}>
            <EditIcon />
            &nbsp;Edit
          </Button>
          <StyledModal
            isOpen={isOpen}
            handleClose={handleClose}
            ariaDescribedBy="edit-project-description"
            ariaLabelledBy="edit-project-title"
          >
            <EditProjectForm
              handleClose={handleClose}
              projectName={projectName}
              projectDescription={projectDescription}
              projectId={projectId}
            />
          </StyledModal>
        </>
      )}
    </Box>
  );
};

export default EditProjectButton;
