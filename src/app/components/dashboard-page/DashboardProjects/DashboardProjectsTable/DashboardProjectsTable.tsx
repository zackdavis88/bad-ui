import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchDashboardProjects } from '@/app/data/fetchers/fetchDashboardProjects';
import { ProjectsNameFilter } from './ProjectsNameFilter';
import { ProjectsPagination } from './ProjectsPagination';
import { ProjectsTable } from './ProjectsTable';

const DashboardProjectsTable = async ({
  itemsPerPage,
  page,
  projectName,
}: {
  itemsPerPage?: string;
  page?: string;
  projectName?: string;
}) => {
  const dashboardProjects = await fetchDashboardProjects({
    page,
    itemsPerPage,
    projectName,
  });

  if (!projectName && !dashboardProjects.projects.length) {
    return (
      <Typography variant="body1" marginTop={2}>
        You are not a member of any projects.
      </Typography>
    );
  }

  return (
    <>
      <Box
        sx={{
          marginY: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-end' },
          justifyContent: { md: 'space-between' },
          '& .MuiTablePagination-spacer': {
            display: 'none',
          },
          '& .MuiTablePagination-root p': {
            marginBottom: 1,
          },
          '& .MuiTablePagination-root > .MuiToolbar-root': {
            alignItems: 'flex-end',
            paddingLeft: 0,
          },
        }}
      >
        <ProjectsNameFilter projectName={projectName} />
        <ProjectsPagination
          itemsPerPage={dashboardProjects.itemsPerPage}
          page={dashboardProjects.page}
          totalItems={dashboardProjects.totalItems}
        />
      </Box>
      <ProjectsTable dashboardProjects={dashboardProjects.projects} />
    </>
  );
};

export default DashboardProjectsTable;
