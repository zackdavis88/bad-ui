import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { fetchProject } from '@/app/data/fetchers/fetchProject';
import { ProjectDetailsHeader } from './ProjectDetailsHeader';
import { ProjectDetailsBlock } from './ProjectDetailsBlock';

const ProjectDetailsSection = async ({ projectId }: { projectId: string }) => {
  const { project } = await fetchProject({ projectId });

  return (
    <Box display="flex" flexDirection="column">
      <ProjectDetailsHeader />
      <Grid container spacing={2}>
        <ProjectDetailsBlock>
          <Box>
            <Typography component="div" variant="subtitle2">
              Name
            </Typography>
            <Typography component="span" variant="body1">
              {project.name}
            </Typography>
          </Box>
          <Box>
            <Typography component="div" variant="subtitle2">
              Description
            </Typography>
            <Typography
              component="pre"
              variant="body1"
              whiteSpace="pre-wrap"
              sx={{ fontStyle: project.description ? 'normal' : 'italic' }}
            >
              {project.description ? project.description : 'No description provided'}
            </Typography>
          </Box>
        </ProjectDetailsBlock>

        <ProjectDetailsBlock>
          <Box>
            <Typography component="div" variant="subtitle2">
              Created On
            </Typography>
            <Typography component="span" variant="body1">
              {new Date(project.createdOn).toDateString()}
            </Typography>
          </Box>
          <Box>
            {project.createdBy && (
              <Grid size={12} overflow="hidden" textOverflow="ellipsis">
                <Typography component="div" variant="subtitle2">
                  Created By
                </Typography>
                <Typography component="span" variant="body1">
                  {project.createdBy.displayName}
                </Typography>
              </Grid>
            )}
          </Box>
        </ProjectDetailsBlock>

        {project.updatedOn && (
          <ProjectDetailsBlock>
            <Box>
              <Typography component="div" variant="subtitle2">
                Updated On
              </Typography>
              <Typography component="span" variant="body1">
                {new Date(project.updatedOn).toDateString()}
              </Typography>
            </Box>
            {project.updatedBy && (
              <Box>
                <Typography component="div" variant="subtitle2">
                  Updated By
                </Typography>
                <Typography component="span" variant="body1">
                  {project.updatedBy.displayName}
                </Typography>
              </Box>
            )}
          </ProjectDetailsBlock>
        )}
      </Grid>
    </Box>
  );
};

export default ProjectDetailsSection;
