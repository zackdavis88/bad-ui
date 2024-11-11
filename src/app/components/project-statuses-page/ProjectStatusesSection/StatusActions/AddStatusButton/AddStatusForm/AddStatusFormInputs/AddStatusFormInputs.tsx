import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddStatusFormInputs = ({ nameError }: { nameError?: string }) => {
  return (
    <Box component="div" marginBottom={4}>
      <TextField
        id="name-input"
        label="Name"
        variant="filled"
        color="primary"
        name="name"
        required
        fullWidth
        error={!!nameError}
        helperText={nameError}
      />
    </Box>
  );
};

export default AddStatusFormInputs;
