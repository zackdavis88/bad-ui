'use client';
import { useEffect, useState, useActionState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { createUser } from '@/app/data/actions/createUser';

const RegisterForm = () => {
  const [createUserState, formAction, isPending] = useActionState(createUser, undefined);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  const generalErrorMessage =
    createUserState?.status === 'error' && !createUserState.errorField && createUserState.message;

  const usernameErrorMessage =
    createUserState?.status === 'error' &&
    createUserState?.errorField === 'username' &&
    createUserState.message;

  const passwordErrorMessage =
    createUserState?.status === 'error' &&
    createUserState?.errorField === 'password' &&
    createUserState.message;

  const confirmPasswordErrorMessage =
    createUserState?.status === 'error' &&
    createUserState?.errorField === 'confirmPassword' &&
    createUserState.message;

  useEffect(() => {
    if (createUserState?.status === 'success') {
      setUsernameInput('');
      setPasswordInput('');
      setConfirmPasswordInput('');
    }
  }, [createUserState?.status]);

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
          Username requirements:
          <ul style={{ marginTop: 0, fontWeight: 'normal' }}>
            <li>alphanumeric characters only</li>
          </ul>
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
            onChange={(event) => {
              setUsernameInput(event.target.value);
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
            sx={{ maxWidth: '200px', width: '100%', marginBottom: 2 }}
            type="submit"
            disabled={isPending}
            aria-disabled={isPending}
          >
            <AddIcon />
            <Typography variant="button" component="span">
              &nbsp;Register
            </Typography>
          </Button>
          <Link href="/" variant="caption" color="textPrimary" component={NextLink}>
            Already have an account?
          </Link>
        </Box>
      </Box>
    </form>
  );
};

export default RegisterForm;
