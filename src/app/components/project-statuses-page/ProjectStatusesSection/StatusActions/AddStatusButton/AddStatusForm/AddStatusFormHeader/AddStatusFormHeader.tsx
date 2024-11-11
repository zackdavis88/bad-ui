import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AddStatusFormHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
      }}
    >
      <Typography variant="h6" component="h2" id="add-status-title">
        Add Status
      </Typography>
      <Typography variant="body2" component="h2" paddingTop={1} id="add-status-description">
        This form will create a status that can be associated with stories.
      </Typography>
    </Box>
  );
};

export default AddStatusFormHeader;
