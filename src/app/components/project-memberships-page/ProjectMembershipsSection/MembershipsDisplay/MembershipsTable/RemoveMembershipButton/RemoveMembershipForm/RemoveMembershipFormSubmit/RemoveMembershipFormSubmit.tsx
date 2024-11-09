import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const RemoveMembershipFormSubmit = ({ disabled }: { disabled: boolean }) => {
  return (
    <Box component="div" display="flex" justifyContent="center">
      <Button
        variant="contained"
        sx={{ maxWidth: '200px', width: '100%' }}
        color="error"
        type="submit"
        aria-disabled={disabled}
        disabled={disabled}
      >
        <Typography variant="button" component="span" display="flex">
          <DeleteIcon />
          &nbsp;Remove
        </Typography>
      </Button>
    </Box>
  );
};

export default RemoveMembershipFormSubmit;
