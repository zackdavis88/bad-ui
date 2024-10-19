import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const ProjectDetailsHeader = () => {
  return (
    <Box display="flex" justifyContent="flex-start">
      <Divider
        orientation="horizontal"
        variant="inset"
        flexItem
        textAlign="left"
        sx={{
          marginLeft: 0,
          marginBottom: 2,
          width: '100%',
          '& > .MuiDivider-wrapper': {
            paddingLeft: 0,
          },
          '&::before': { display: 'none' },
          '&::after': { borderColor: '#ffffff', width: '100%' },
        }}
      >
        <Typography component="h1" variant="h6">
          Project Details
        </Typography>
      </Divider>
    </Box>
  );
};

export default ProjectDetailsHeader;
