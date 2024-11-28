'use client';
import { useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import Dialog from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import { StoryData } from '@/app/data/apiTypes';
// import { RemoveStatusForm } from './RemoveStatusForm';

const RemoveStoryButton = ({
  disabled,
  story,
}: {
  disabled: boolean;
  story: Omit<StoryData, 'project'>;
}) => {
  // const handleOpen = useCallback(() => {
  //   setIsOpen(true);
  // }, []);

  // const handleClose = useCallback(() => {
  //   setIsOpen(false);
  // }, []);

  // TODO: Add a remove story form.
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
    <IconButton sx={{ color: 'text.primary' }} onClick={() => {}}>
      <DeleteIcon />
    </IconButton>
  );
};

export default RemoveStoryButton;
