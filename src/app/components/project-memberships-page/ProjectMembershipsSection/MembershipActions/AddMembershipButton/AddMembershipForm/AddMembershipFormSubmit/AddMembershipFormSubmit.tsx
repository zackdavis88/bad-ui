import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const AddMembershipFormSubmit = ({ disabled }: { disabled: boolean }) => {
  return (
    <Box component="div" display="flex" justifyContent="center">
      <Button
        variant="contained"
        sx={{ maxWidth: '200px', width: '100%' }}
        type="submit"
        aria-disabled={disabled}
        disabled={disabled}
      >
        <Typography variant="button" component="span" display="flex">
          <PersonAddIcon />
          &nbsp;Add Membership
        </Typography>
      </Button>
    </Box>
  );
};

export default AddMembershipFormSubmit;
