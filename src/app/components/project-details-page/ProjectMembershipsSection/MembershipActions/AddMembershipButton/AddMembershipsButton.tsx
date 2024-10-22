'use client';
import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Dialog from '@mui/material/Dialog';
import { AddMembershipForm } from './AddMembershipForm';

const AddMembershipsButton = ({
  disabled,
  projectId,
  canCreateAdminMembership,
}: {
  disabled: boolean;
  projectId: string;
  canCreateAdminMembership: boolean;
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
            <Button variant="contained" color="success" disabled>
              <PersonAddIcon />
              &nbsp;Add Membership
            </Button>
          </span>
        </Tooltip>
      ) : (
        <>
          <Button variant="contained" color="success" onClick={handleOpen}>
            <PersonAddIcon />
            &nbsp;Add Membership
          </Button>
          <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="add-membership-title"
            aria-describedby="add-membership-description"
            fullWidth
            maxWidth="sm"
          >
            <AddMembershipForm
              projectId={projectId}
              canCreateAdminMembership={canCreateAdminMembership}
              handleClose={handleClose}
            />
          </Dialog>
        </>
      )}
    </Box>
  );
};

export default AddMembershipsButton;
