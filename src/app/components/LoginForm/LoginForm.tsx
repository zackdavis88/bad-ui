'use client';
import { useActionState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import NextLink from 'next/link';
import { login } from '@/app/data/actions/login';

const LoginForm = () => {
  const [errorMessage, formAction, isPending] = useActionState(login, undefined);

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
        <Typography variant="body2" component="h1">
          You must be logged in to access the app. If you do not have an account you can&nbsp;
          <Link href="/register" component={NextLink} underline="always" color="textPrimary">
            register here.
          </Link>
        </Typography>
      </Box>
      {errorMessage && (
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
            {errorMessage}
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
        <Box component="div" display="flex" justifyContent="center">
          <Button
            variant="contained"
            sx={{ maxWidth: '200px', width: '100%' }}
            type="submit"
            disabled={isPending}
            aria-disabled={isPending}
          >
            <LoginIcon />
            <Typography variant="button" component="span" display="flex">
              &nbsp;Login
            </Typography>
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default LoginForm;
