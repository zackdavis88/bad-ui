'use client';
import { useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import { StoryData } from '@/app/data/apiTypes';
import { useParams, useRouter } from 'next/navigation';

const EditStatusButton = ({
  disabled,
  story,
}: {
  disabled: boolean;
  story: Omit<StoryData, 'project'>;
}) => {
  const router = useRouter();
  const { projectId } = useParams<{ projectId: string }>();

  const handleClick = useCallback(() => {
    router.push(`/projects/${projectId}/stories/${story.id}/edit`);
  }, [router, projectId, story.id]);

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
    <IconButton sx={{ color: 'text.primary' }} onClick={handleClick}>
      <EditIcon />
    </IconButton>
  );
};

export default EditStatusButton;
