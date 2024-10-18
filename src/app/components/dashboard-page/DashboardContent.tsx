import Box from '@mui/material/Box';
import { DashboardActions } from './DashboardActions';
import { DashboardProjects } from './DashboardProjects';

const DashboardContent = ({
  itemsPerPage,
  page,
  projectName,
}: {
  itemsPerPage?: string;
  page?: string;
  projectName?: string;
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      width="100%"
      sx={{ paddingX: { xl: 20, sm: 10, xs: 2 }, paddingTop: { sm: 5, xs: 2 } }}
    >
      <DashboardActions />
      <DashboardProjects itemsPerPage={itemsPerPage} page={page} projectName={projectName} />
    </Box>
  );
};

export default DashboardContent;
