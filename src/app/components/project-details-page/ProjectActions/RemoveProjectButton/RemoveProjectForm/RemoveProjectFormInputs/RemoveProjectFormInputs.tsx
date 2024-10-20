import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';

const RemoveProjectFormInputs = ({
  projectNameInput,
  handleChange,
}: {
  projectNameInput: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Box component="div" marginBottom={2}>
      <TextField
        id="name-input"
        label="Project Name"
        variant="filled"
        color="error"
        name="name"
        required
        fullWidth
        value={projectNameInput}
        onChange={handleChange}
      />
    </Box>
  );
};

export default RemoveProjectFormInputs;
