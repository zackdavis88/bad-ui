import { useState, useCallback, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CreateProjectFormInputs = ({
  nameErrorMessage,
  descriptionErrorMessage,
}: {
  nameErrorMessage?: string;
  descriptionErrorMessage?: string;
}) => {
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  }, []);

  const handleDescriptionChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setDescriptionInput(event.target.value);
  }, []);

  return (
    <>
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
          onChange={handleNameChange}
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
          onChange={handleDescriptionChange}
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
    </>
  );
};

export default CreateProjectFormInputs;
