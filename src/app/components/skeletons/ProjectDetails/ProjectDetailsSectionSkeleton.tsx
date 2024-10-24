import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';

const ProjectDetailsSectionSkeleton = () => {
  return (
    <Box display="flex" flexDirection="column" marginBottom={8}>
      {/* Header section */}
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
      {/* Actions section */}
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
      {/* Details section */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            <Skeleton variant="rounded" width="100%" height={142} />
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            <Skeleton variant="rounded" width="100%" height={142} />
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            <Skeleton variant="rounded" width="100%" height={142} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetailsSectionSkeleton;
