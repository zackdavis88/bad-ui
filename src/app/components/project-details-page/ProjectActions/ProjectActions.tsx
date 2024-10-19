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
      }}
    >
      <EditProjectButton disabled={!permissions.canUpdateProject} />
      <RemoveProjectButton
        disabled={!permissions.canRemoveProject}
        projectName={project.name}
        projectId={project.id}
      />
    </Box>
  );
};

export default ProjectActions;
