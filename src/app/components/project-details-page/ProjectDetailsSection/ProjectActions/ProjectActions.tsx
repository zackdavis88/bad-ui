import Box from '@mui/material/Box';
import { RemoveProjectButton } from './RemoveProjectButton';
import { EditProjectButton } from './EditProjectButton';
import { GetProjectPermissionsResponse, GetProjectResponse } from '@/app/data/apiTypes';

const ProjectActions = async ({
  project,
  permissions,
}: {
  project: GetProjectResponse['project'];
  permissions: GetProjectPermissionsResponse['permissions'];
}) => {
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
