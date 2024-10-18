import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyIcon from '@mui/icons-material/Key';

const ChangePasswordFormSubmit = ({ disabled }: { disabled: boolean }) => {
  return (
    <Box component="div" display="flex" alignItems="center" flexDirection="column">
      <Button
        variant="contained"
        sx={{ maxWidth: '230px', width: '100%', marginBottom: 2 }}
        type="submit"
        disabled={disabled}
        aria-disabled={disabled}
      >
        <KeyIcon />
        <Typography variant="button" component="span">
          &nbsp;Change Password
        </Typography>
      </Button>
    </Box>
  );
};

export default ChangePasswordFormSubmit;
