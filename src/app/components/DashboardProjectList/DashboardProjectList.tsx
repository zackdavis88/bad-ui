import Typography from '@mui/material/Typography';
import ProjectDetailsTable from './components/ProjectDetailsTable';
import ProjectDetailsPagination from './components/ProjectDetailsPagination';
import { GetDashboardProjectsResponse } from '@/app/data/apiTypes';

async function DashboardProjectList({
  dashboardProjects,
}: {
  dashboardProjects: GetDashboardProjectsResponse;
}) {
  if (!dashboardProjects.projects.length) {
    return (
      <Typography variant="body1" marginTop={2}>
        You are not a member of any projects.
      </Typography>
    );
  }
  return (
    <>
      <ProjectDetailsTable dashboardProjects={dashboardProjects.projects} />
      <ProjectDetailsPagination
        totalItems={dashboardProjects.totalItems}
        page={dashboardProjects.page}
        itemsPerPage={dashboardProjects.itemsPerPage}
      />
    </>
  );
}

export default DashboardProjectList;
