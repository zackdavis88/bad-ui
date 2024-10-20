import Grid from '@mui/material/Grid2';
import { Children } from 'react';

const ProjectDetailsBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: '#212121',
          borderRadius: 2,
          padding: 2,
          border: '1px solid',
          borderColor: 'primary.main',
        }}
      >
        {Children.map(children, (child) => (
          <Grid size={12} overflow="hidden" textOverflow="ellipsis">
            {child}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectDetailsBlock;
