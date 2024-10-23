import Box from '@mui/material/Box';
import { fetchProject } from '@/app/data/fetchers/fetchProject';
import { fetchProjectPermissions } from '@/app/data/fetchers/fetchProjectPermissions';
import { ProjectMembershipsHeader } from './ProjectMembershipsHeader';
import { MembershipActions } from './MembershipActions';

import { fetchProjectMemberships } from '@/app/data/fetchers/fetchProjectMemberships';
import { MembershipsDisplay } from './MembershipsDisplay';

const ProjectMembershipsSection = async ({
  projectId,
  itemsPerPage,
  page,
  usernameFilter,
}: {
  projectId: string;
  itemsPerPage?: string;
  page?: string;
  usernameFilter?: string;
}) => {
  const { permissions } = await fetchProjectPermissions({ projectId });
  const { project } = await fetchProject({ projectId });
  const membershipData = await fetchProjectMemberships({
    projectId,
    itemsPerPage,
    page,
    usernameFilter,
  });
  return (
    <Box display="flex" flexDirection="column" marginBottom={8}>
      <ProjectMembershipsHeader />
      <MembershipActions permissions={permissions} project={project} />
      <MembershipsDisplay
        membershipData={membershipData}
        usernameFilter={usernameFilter}
        permissions={permissions}
      />
    </Box>
  );
};

export default ProjectMembershipsSection;
