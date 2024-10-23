'use client';
import { useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import EditIcon from '@mui/icons-material/Edit';
import { MembershipData } from '@/app/data/apiTypes';
import { EditMembershipForm } from './EditMembershipForm';

const EditMembershipButton = ({
  disabled,
  membership,
  canUpdateAdminMembership,
}: {
  disabled: boolean;
  membership: Omit<MembershipData, 'project'>;
  canUpdateAdminMembership: boolean;
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
          <EditIcon />
        </IconButton>
      </span>
    </Tooltip>
  ) : (
    <>
      <IconButton sx={{ color: 'text.primary' }} onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby=""
        aria-describedby=""
        fullWidth
        maxWidth="sm"
      >
        <EditMembershipForm
          handleClose={handleClose}
          canUpdateAdminMembership={canUpdateAdminMembership}
          membership={membership}
        />
      </Dialog>
    </>
  );
};

export default EditMembershipButton;
