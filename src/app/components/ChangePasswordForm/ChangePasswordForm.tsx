'use client';
import { useEffect, useState, useActionState, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyIcon from '@mui/icons-material/Key';
import { changePassword } from '@/app/data/actions/changePassword';
import { AlertBarContext } from '@/app/components/common/AlertBar';

const ChangePasswordForm = () => {
  const [changePasswordState, formAction, isPending] = useActionState(changePassword, undefined);
  const [currentPasswordInput, setCurrentPasswordInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const { handleOpen } = useContext(AlertBarContext);

  const generalErrorMessage =
    changePasswordState?.status === 'error' &&
    !changePasswordState.errorField &&
    changePasswordState.message;

  const currentPasswordErrorMessage =
    changePasswordState?.status === 'error' &&
    changePasswordState?.errorField === 'currentPassword' &&
    changePasswordState.message;

  const passwordErrorMessage =
    changePasswordState?.status === 'error' &&
    changePasswordState?.errorField === 'password' &&
    changePasswordState.message;

  const confirmPasswordErrorMessage =
    changePasswordState?.status === 'error' &&
    changePasswordState?.errorField === 'confirmPassword' &&
    changePasswordState.message;

  useEffect(() => {
    if (changePasswordState?.status === 'success') {
      // Clear the form out.
      setCurrentPasswordInput('');
      setPasswordInput('');
      setConfirmPasswordInput('');

      // Display an alert.
      handleOpen({
        message: changePasswordState.message,
        type: changePasswordState.status,
        openImmediately: true,
      });
    }
  }, [changePasswordState?.status, changePasswordState?.message, handleOpen]);

  return (
    <form action={formAction}>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        sx={{
          backgroundColor: 'primary.main',
          padding: 2,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      >
        <Typography variant="body2" component="h1" fontWeight="bold">
          Password requirements:
          <ul style={{ margin: 0, fontWeight: 'normal' }}>
            <li>8 characters minimum</li>
            <li>must have at least 1 uppercase, lowercase, and number character</li>
          </ul>
        </Typography>
      </Box>
      {generalErrorMessage && (
        <Box
          width="100%"
          display="flex"
          sx={{
            paddingX: 2,
            paddingTop: 2,
            borderLeft: '1px solid',
            borderRight: '1px solid',
            borderColor: 'primary.main',
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
            onChange={(event) => {
              setCurrentPasswordInput(event.target.value);
            }}
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
            onChange={(event) => {
              setPasswordInput(event.target.value);
            }}
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
            onChange={(event) => {
              setConfirmPasswordInput(event.target.value);
            }}
          />
        </Box>
        <Box component="div" display="flex" alignItems="center" flexDirection="column">
          <Button
            variant="contained"
            sx={{ maxWidth: '230px', width: '100%', marginBottom: 2 }}
            type="submit"
            disabled={isPending}
            aria-disabled={isPending}
          >
            <KeyIcon />
            <Typography variant="button" component="span">
              &nbsp;Change Password
            </Typography>
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default ChangePasswordForm;
