import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const EditProjectFormHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
      }}
    >
      <Typography variant="h6" component="h2" id="edit-project-title">
        Edit Project
      </Typography>
      <Typography variant="body2" component="h2" paddingTop={1} id="edit-project-description">
        This form will update project details.
      </Typography>
    </Box>
  );
};

export default EditProjectFormHeader;
