'use client';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import { useRouter, useParams } from 'next/navigation';

const AddStoryButton = ({ disabled }: { disabled: boolean }) => {
  const router = useRouter();
  const { projectId } = useParams<{ projectId: string }>();

  const handleClick = useCallback(() => {
    router.push(`/projects/${projectId}/stories/create`);
  }, [router, projectId]);

  return (
    <Box sx={{ marginBottom: { xs: 2, sm: 0 } }}>
      {disabled ? (
        <Tooltip title="You don't have permission to do this">
          <span>
            <Button variant="contained" color="success" disabled>
              <AddIcon />
              &nbsp;Add Story
            </Button>
          </span>
        </Tooltip>
      ) : (
        <Button variant="contained" color="success" onClick={handleClick} role="link">
          <AddIcon />
          &nbsp;Add Story
        </Button>
      )}
    </Box>
  );
};

export default AddStoryButton;
