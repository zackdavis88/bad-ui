import { ChangeEvent, useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const RegisterFormInputs = ({
  usernameErrorMessage,
  passwordErrorMessage,
  confirmPasswordErrorMessage,
}: {
  usernameErrorMessage?: string;
  passwordErrorMessage?: string;
  confirmPasswordErrorMessage?: string;
}) => {
  // Making these inputs controlled so that the data doesnt automatically clear on submit.
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  const handleUsernameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  }, []);

  const handleConfirmPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPasswordInput(event.target.value);
  }, []);

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
          error={!!usernameErrorMessage}
          helperText={usernameErrorMessage}
          value={usernameInput}
          onChange={handleUsernameChange}
        />
      </Box>
      <Box component="div" marginBottom={2}>
        <TextField
          id="password-input"
          label="Password"
          variant="filled"
          type="password"
          name="password"
          required
          fullWidth
          error={!!passwordErrorMessage}
          helperText={passwordErrorMessage}
          value={passwordInput}
          onChange={handlePasswordChange}
        />
      </Box>
      <Box component="div" marginBottom={4}>
        <TextField
          id="confirm-password-input"
          label="Confirm Password"
          variant="filled"
          type="password"
          name="confirmPassword"
          required
          fullWidth
          error={!!confirmPasswordErrorMessage}
          helperText={confirmPasswordErrorMessage}
          value={confirmPasswordInput}
          onChange={handleConfirmPasswordChange}
        />
      </Box>
    </>
  );
};

export default RegisterFormInputs;
