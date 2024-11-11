'use client';
import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import { AddStatusForm } from './AddStatusForm';

const AddStatusButton = ({ disabled, statusCount }: { disabled: boolean; statusCount: number }) => {
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
              <AddIcon />
              &nbsp;Add Status
            </Button>
          </span>
        </Tooltip>
      ) : (
        <>
          <Button variant="contained" color="success" onClick={handleOpen}>
            <AddIcon />
            &nbsp;Add Status
          </Button>
          <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="add-status-title"
            aria-describedby="add-status-description"
            fullWidth
            maxWidth="sm"
          >
            <AddStatusForm statusCount={statusCount} handleClose={handleClose} />
          </Dialog>
        </>
      )}
    </Box>
  );
};

export default AddStatusButton;
