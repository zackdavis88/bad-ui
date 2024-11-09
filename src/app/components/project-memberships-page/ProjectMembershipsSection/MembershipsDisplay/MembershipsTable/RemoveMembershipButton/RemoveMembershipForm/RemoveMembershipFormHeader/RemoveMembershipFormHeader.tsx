import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RemoveMembershipFormHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'error.main',
        padding: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
      }}
    >
      <Typography variant="h6" component="h2" id="remove-membership-title">
        Remove Membership
      </Typography>
      <Typography variant="body2" component="h2" paddingTop={1} id="remove-membership-description">
        Remove permissions for a user.
      </Typography>
    </Box>
  );
};

export default RemoveMembershipFormHeader;
