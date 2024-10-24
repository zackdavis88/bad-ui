'use client';
import { useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import { MembershipData } from '@/app/data/apiTypes';
import { RemoveMembershipForm } from './RemoveMembershipForm';

const RemoveMembershipButton = ({
  disabled,
  membership,
}: {
  disabled: boolean;
  membership: Omit<MembershipData, 'project'>;
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
        aria-labelledby="remove-membership-title"
        aria-describedby="remove-membership-description"
        fullWidth
        maxWidth="sm"
      >
        <RemoveMembershipForm handleClose={handleClose} membership={membership} />
      </Dialog>
    </>
  );
};

export default RemoveMembershipButton;
