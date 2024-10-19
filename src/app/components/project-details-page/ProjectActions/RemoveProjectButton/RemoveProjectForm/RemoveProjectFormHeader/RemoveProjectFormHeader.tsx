import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RemoveProjectFormHeader = ({ projectName }: { projectName: string }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'error.main',
        padding: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
      }}
    >
      <Typography variant="h6" component="h2" id="remove-project-title">
        Remove Project
      </Typography>
      <Typography variant="body2" component="h2" paddingTop={1} id="remove-project-description">
        Project Name: <strong>{projectName}</strong>
        <br />
        <br />
        This action cannot be undone. Once the project is removed all project members will lose
        access to any data that is part of the project.
      </Typography>
    </Box>
  );
};

export default RemoveProjectFormHeader;
