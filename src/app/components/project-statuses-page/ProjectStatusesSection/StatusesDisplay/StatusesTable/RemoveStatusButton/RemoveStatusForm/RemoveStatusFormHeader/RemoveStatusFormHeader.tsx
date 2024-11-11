import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RemoveStatusFormHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'error.main',
        padding: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
      }}
    >
      <Typography variant="h6" component="h2" id="remove-status-title">
        Remove Status
      </Typography>
      <Typography variant="body2" component="h2" paddingTop={1} id="remove-status-description">
        This form will permanently remove a status.
      </Typography>
    </Box>
  );
};

export default RemoveStatusFormHeader;
