import Box from '@mui/material/Box';
import { fetchProject } from '@/app/data/fetchers/fetchProject';
import { fetchProjectPermissions } from '@/app/data/fetchers/fetchProjectPermissions';
import { ProjectMembershipsHeader } from './ProjectMembershipsHeader';

const ProjectMembershipsSection = async ({ projectId }: { projectId: string }) => {
  const { permissions } = await fetchProjectPermissions({ projectId });
  const { project } = await fetchProject({ projectId });

  return (
    <Box display="flex" flexDirection="column">
      <ProjectMembershipsHeader />
    </Box>
  );
};

export default ProjectMembershipsSection;
