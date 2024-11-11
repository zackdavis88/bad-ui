'use client';
import { useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import { StatusData } from '@/app/data/apiTypes';
import { RemoveStatusForm } from './RemoveStatusForm';

const RemoveStatusButton = ({
  disabled,
  status,
}: {
  disabled: boolean;
  status: Omit<StatusData, 'project'>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return disabled ? (
    <Tooltip title="You don't have permission to do this">
      <span>
        <IconButton
          sx={{ '&.Mui-disabled': { color: '#A1A1A1' } }}
          disabled={disabled}
          aria-disabled={disabled}
        >
          <DeleteIcon />
        </IconButton>
      </span>
    </Tooltip>
  ) : (
    <>
      <IconButton sx={{ color: 'text.primary' }} onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="remove-status-title"
        aria-describedby="remove-status-description"
        fullWidth
        maxWidth="sm"
      >
        <RemoveStatusForm handleClose={handleClose} status={status} />
      </Dialog>
    </>
  );
};

export default RemoveStatusButton;
