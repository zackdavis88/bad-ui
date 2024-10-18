import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CreateProjectFormHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
      }}
    >
      <Typography variant="h6" component="h2" id="create-project-title">
        New Project
      </Typography>
      <Typography variant="body2" component="h2" paddingTop={1} id="create-project-description">
        This form will create a project and automatically give you admin privileges.
      </Typography>
    </Box>
  );
};

export default CreateProjectFormHeader;
