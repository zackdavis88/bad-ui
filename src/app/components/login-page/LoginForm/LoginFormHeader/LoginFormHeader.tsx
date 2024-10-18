import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { ROUTES } from '@/app/constants/routes';

const LoginFormHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="body2" component="h1">
        You must be logged in to access the app. If you do not have an account you can&nbsp;
        <Link href={ROUTES.REGISTER} component={NextLink} underline="always" color="textPrimary">
          register here.
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginFormHeader;
