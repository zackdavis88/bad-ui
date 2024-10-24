import { useState, useCallback, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const EditProjectFormInputs = ({
  nameErrorMessage,
  descriptionErrorMessage,
  initialNameValue,
  initialDescriptionValue,
}: {
  nameErrorMessage?: string;
  descriptionErrorMessage?: string;
  initialNameValue: string;
  initialDescriptionValue: string;
}) => {
  const [nameInput, setNameInput] = useState(initialNameValue);
  const [descriptionInput, setDescriptionInput] = useState(initialDescriptionValue);

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
    </>
  );
};

export default EditProjectFormInputs;
