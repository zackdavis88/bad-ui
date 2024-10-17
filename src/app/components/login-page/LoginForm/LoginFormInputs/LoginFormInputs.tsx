import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const LoginFormInputs = () => {
  return (
    <>
      <Box component="div" marginBottom={2}>
        <TextField
          id="username-input"
          label="Username"
          variant="filled"
          color="primary"
          name="username"
          required
          fullWidth
        />
      </Box>
      <Box component="div" marginBottom={4}>
        <TextField
          id="password-input"
          label="Password"
          variant="filled"
          type="password"
          name="password"
          required
          fullWidth
        />
      </Box>
    </>
  );
};

export default LoginFormInputs;
