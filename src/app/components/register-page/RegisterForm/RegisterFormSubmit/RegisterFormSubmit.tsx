import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import { ROUTES } from '@/app/constants/routes';

const RegisterFormSubmit = ({ disabled }: { disabled: boolean }) => {
  return (
    <Box component="div" display="flex" alignItems="center" flexDirection="column">
      <Button
        variant="contained"
        sx={{ maxWidth: '200px', width: '100%', marginBottom: 2 }}
        type="submit"
        disabled={disabled}
        aria-disabled={disabled}
      >
        <AddIcon />
        <Typography variant="button" component="span">
          &nbsp;Register
        </Typography>
      </Button>
      <Link href={ROUTES.LOGIN} variant="caption" color="textPrimary" component={NextLink}>
        Already have an account?
      </Link>
    </Box>
  );
};

export default RegisterFormSubmit;
