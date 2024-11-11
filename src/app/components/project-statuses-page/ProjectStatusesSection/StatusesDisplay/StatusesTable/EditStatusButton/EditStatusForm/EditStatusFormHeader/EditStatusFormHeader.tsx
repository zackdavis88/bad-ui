import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const EditStatusFormHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
      }}
    >
      <Typography variant="h6" component="h2" id="edit-status-title">
        Edit Status
      </Typography>
      <Typography variant="body2" component="h2" paddingTop={1} id="edit-status-description">
        This form will update a status name.
      </Typography>
    </Box>
  );
};

export default EditStatusFormHeader;
