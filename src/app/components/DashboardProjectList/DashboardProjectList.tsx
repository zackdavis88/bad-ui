import Typography from '@mui/material/Typography';
import ProjectDetailsTable from './components/ProjectDetailsTable';
import ProjectDetailsPagination from './components/ProjectDetailsPagination';
import ProjectNameFilter from './components/ProjectNameFilter';
import Box from '@mui/material/Box';
import { fetchDashboardProjects } from '@/app/data/fetchers/fetchDashboardProjects';

async function DashboardProjectList({
  itemsPerPage,
  page,
  projectName,
}: {
  itemsPerPage?: string;
  page?: string;
  projectName?: string;
}) {
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
        <ProjectNameFilter projectName={projectName} />
        <ProjectDetailsPagination
          totalItems={dashboardProjects.totalItems}
          page={dashboardProjects.page}
          itemsPerPage={dashboardProjects.itemsPerPage}
        />
      </Box>
      <ProjectDetailsTable dashboardProjects={dashboardProjects.projects} />
    </>
  );
}

export default DashboardProjectList;
