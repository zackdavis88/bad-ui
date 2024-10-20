import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const ProjectActionsSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          sm: 'row',
        },
        justifyContent: {
          xs: 'flex-start',
        },
        marginBottom: { xs: 2 },
      }}
    >
      <Box sx={{ marginRight: { xs: 0, sm: 2 } }}>
        <Skeleton variant="rounded" width={89} height={37} />
      </Box>
      <Box sx={{ marginBottom: { xs: 2, sm: 0 } }}>
        <Skeleton variant="rounded" width={115} height={37} />
      </Box>
    </Box>
  );
};

export default ProjectActionsSkeleton;
