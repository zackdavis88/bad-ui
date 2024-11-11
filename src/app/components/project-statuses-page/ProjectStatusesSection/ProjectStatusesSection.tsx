import Box from '@mui/material/Box';
import { fetchProjectStatuses } from '@/app/data/fetchers/fetchProjectStatuses';
import { fetchProjectPermissions } from '@/app/data/fetchers/fetchProjectPermissions';
import { ProjectStatusesHeader } from './ProjectStatusesHeader';
import { StatusActions } from './StatusActions';
import { StatusesDisplay } from './StatusesDisplay';

const ProjectStatusesSection = async ({
  projectId,
  itemsPerPage,
  page,
  nameFilter,
}: {
  projectId: string;
  itemsPerPage?: string;
  page?: string;
  nameFilter?: string;
}) => {
  const { permissions } = await fetchProjectPermissions({ projectId });
  const statusesData = await fetchProjectStatuses({
    projectId,
    itemsPerPage,
    page,
    nameFilter,
  });

  return (
    <Box display="flex" flexDirection="column" marginBottom={8}>
      <ProjectStatusesHeader />
      <StatusActions permissions={permissions} statusCount={statusesData.totalItems} />
      <StatusesDisplay
        statusesData={statusesData}
        nameFilter={nameFilter}
        permissions={permissions}
      />
    </Box>
  );
};

export default ProjectStatusesSection;
