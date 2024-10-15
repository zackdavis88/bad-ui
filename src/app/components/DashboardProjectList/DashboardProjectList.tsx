import Typography from '@mui/material/Typography';
import ProjectDetailsTable from './components/ProjectDetailsTable';
import ProjectDetailsPagination from './components/ProjectDetailsPagination';
import { fetchDashboardProjects } from '@/app/data/fetchers/fetchDashboardProjects';

async function DashboardProjectList({
  itemsPerPage,
  page,
}: {
  itemsPerPage?: string;
  page?: string;
}) {
  const dashboardProjects = await fetchDashboardProjects({
    page,
    itemsPerPage,
  });

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
