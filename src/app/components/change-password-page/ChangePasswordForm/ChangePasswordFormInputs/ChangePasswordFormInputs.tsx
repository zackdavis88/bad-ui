import { useState, useCallback, useEffect, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ChangePasswordFormInputs = ({
  currentPasswordErrorMessage,
  passwordErrorMessage,
  confirmPasswordErrorMessage,
  submitWasSuccessful,
}: {
  currentPasswordErrorMessage?: string;
  passwordErrorMessage?: string;
  confirmPasswordErrorMessage?: string;
  submitWasSuccessful: boolean;
}) => {
  const [currentPasswordInput, setCurrentPasswordInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  const handleCurrentPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPasswordInput(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  }, []);

  const handleConfirmPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPasswordInput(event.target.value);
  }, []);

  useEffect(() => {
    // Since we are not navigating away once the form is submitted, we want to clear out the inputs
    // only in the case where the API call was successful.
    if (submitWasSuccessful) {
      setCurrentPasswordInput('');
      setPasswordInput('');
      setConfirmPasswordInput('');
    }
  }, [submitWasSuccessful]);

  return (
    <>
      <Box component="div" marginBottom={2}>
        <TextField
          id="current-password-input"
          label="Current Password"
          variant="filled"
          type="password"
          color="primary"
          name="currentPassword"
          required
          fullWidth
          error={!!currentPasswordErrorMessage}
          helperText={currentPasswordErrorMessage}
          value={currentPasswordInput}
          onChange={handleCurrentPasswordChange}
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

export default ChangePasswordFormInputs;
