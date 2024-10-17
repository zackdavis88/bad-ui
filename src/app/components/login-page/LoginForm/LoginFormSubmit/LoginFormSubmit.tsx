import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const LoginFormSubmit = ({ disabled }: { disabled: boolean }) => {
  return (
    <Box component="div" display="flex" justifyContent="center">
      <Button
        variant="contained"
        sx={{ maxWidth: '200px', width: '100%' }}
        type="submit"
        disabled={disabled}
        aria-disabled={disabled}
      >
        <LoginIcon />
        <Typography variant="button" component="span" display="flex">
          &nbsp;Login
        </Typography>
      </Button>
    </Box>
  );
};

export default LoginFormSubmit;
