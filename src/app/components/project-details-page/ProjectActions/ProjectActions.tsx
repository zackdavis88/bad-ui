import Box from '@mui/material/Box';
import { fetchProjectPermissions } from '@/app/data/fetchers/fetchProjectPermissions';
import { fetchProject } from '@/app/data/fetchers/fetchProject';
import { RemoveProjectButton } from './RemoveProjectButton';
import { EditProjectButton } from './EditProjectButton';
const ProjectActions = async ({ projectId }: { projectId: string }) => {
  const { permissions } = await fetchProjectPermissions({ projectId });
  const { project } = await fetchProject({ projectId });

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
          sm: 'flex-start',
        },
        marginBottom: {
          xs: 2,
        },
      }}
    >
      <EditProjectButton
        disabled={!permissions.canUpdateProject}
        projectName={project.name}
        projectDescription={project.description || ''}
        projectId={project.id}
      />
      <RemoveProjectButton
        disabled={!permissions.canRemoveProject}
        projectName={project.name}
        projectId={project.id}
      />
    </Box>
  );
};

export default ProjectActions;
