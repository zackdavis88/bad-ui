'use client';
import { useEffect, useActionState, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import { createProject } from '@/app/data/actions/createProject';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CreateProjectForm = ({ handleClose }: { handleClose?: () => void }) => {
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [createProjectState, formAction, isLoading] = useActionState(createProject, undefined);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const generalErrorMessage =
    createProjectState?.status === 'error' &&
    !createProjectState.errorField &&
    createProjectState.message;

  const nameErrorMessage =
    createProjectState?.status === 'error' &&
    createProjectState?.errorField === 'name' &&
    createProjectState.message;

  const descriptionErrorMessage =
    createProjectState?.status === 'error' &&
    createProjectState?.errorField === 'description' &&
    createProjectState.message;

  useEffect(() => {
    if (createProjectState?.status === 'success') {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.set('page', '1');
      router.push(`${pathname}?${updatedSearchParams.toString()}`);

      if (handleClose) {
        handleClose();
      }
    }
  }, [createProjectState?.status, handleClose, pathname, router, searchParams]);

  return (
    <form action={formAction}>
      {/* Form Heading */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          padding: 2,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      >
        <Typography variant="h6" component="h2" id="create-project-title">
          New Project
        </Typography>
        <Typography variant="body2" component="h2" paddingTop={1} id="create-project-description">
          This form will create a project and automatically give you admin privileges.
        </Typography>
      </Box>
      {/* Form Inputs and Submit Button */}
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        sx={{
          padding: 2,
          border: '1px solid',
          borderColor: 'primary.main',
          borderTop: 'none',
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
        }}
      >
        {generalErrorMessage && (
          <Box
            width="100%"
            display="flex"
            sx={{
              marginBottom: 2,
            }}
          >
            <Box
              sx={{
                width: '100%',
                backgroundColor: 'error.main',
                padding: 2,
                borderRadius: 1,
              }}
            >
              {generalErrorMessage}
            </Box>
          </Box>
        )}
        <Box component="div" marginBottom={2}>
          <TextField
            id="name-input"
            label="Name"
            variant="filled"
            color="primary"
            name="name"
            required
            fullWidth
            error={!!nameErrorMessage}
            helperText={nameErrorMessage}
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
          />
        </Box>
        <Box component="div" marginBottom={2}>
          <TextField
            id="description-input"
            label="Description"
            variant="filled"
            color="primary"
            name="description"
            fullWidth
            multiline
            minRows={5}
            maxRows={5}
            error={!!descriptionErrorMessage}
            helperText={descriptionErrorMessage}
            value={descriptionInput}
            onChange={(event) => setDescriptionInput(event.target.value)}
          />
        </Box>
        <Box component="div" marginBottom={2}>
          <FormControlLabel
            control={
              <Checkbox
                disableRipple
                disableTouchRipple
                name="createDefaultStatuses"
                defaultChecked
                inputProps={{
                  'aria-label': 'create default statuses',
                }}
                sx={{
                  color: '#FFFFFF',
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}
              />
            }
            label="Create Default Statuses"
          />
        </Box>
        <Box component="div" display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{ maxWidth: '200px', width: '100%' }}
            type="submit"
            aria-disabled={isLoading}
            disabled={isLoading}
          >
            <Typography variant="button" component="span" display="flex">
              <AddIcon />
              &nbsp;Create Project
            </Typography>
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default CreateProjectForm;
