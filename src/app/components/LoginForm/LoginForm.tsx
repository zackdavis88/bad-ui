'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

const LoginForm = () => {
  return (
    <form action={() => {}}>
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
        <Typography variant="h5" component="h1" sx={{ fontWeight: '700' }} paddingBottom={2}>
          Login
        </Typography>
        <Typography variant="body2" component="p">
          You must be logged in to access the app. If you do not have an account you can&nbsp;
          <Link href="/register" component={NextLink} underline="always" color="textPrimary">
            register here.
          </Link>
        </Typography>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        sx={{
          padding: 2,
          border: '1px solid',
          borderColor: 'primary.main',
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
            fullWidth
          />
        </Box>
        <Box component="div" marginBottom={4}>
          <TextField
            id="password-input"
            label="Password"
            variant="filled"
            type="password"
            fullWidth
          />
        </Box>
        <Box component="div" display="flex" justifyContent="center">
          <Button variant="contained" sx={{ maxWidth: '200px', width: '100%' }}>
            Login
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default LoginForm;
