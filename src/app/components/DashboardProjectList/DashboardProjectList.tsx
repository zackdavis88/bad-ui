import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { fetchDashboardProjects } from '@/app/data/fetchers/fetchDashboardProjects';

// TODO: Continue with functionality here.
//       should each row link to the Project page? Something else? idk.
async function DashboardProjectList() {
  const dashboardProjects = await fetchDashboardProjects();

  if (!dashboardProjects.projects.length) {
    return (
      <Typography variant="body1" marginTop={2}>
        You are not a member of any projects.
      </Typography>
    );
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dashboard-projects-table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Created On</TableCell>
            <TableCell>Created By</TableCell>
            <TableCell>My Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dashboardProjects.projects.map((project) => (
            <TableRow
              key={project.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&.MuiTableRow-hover:hover': { backgroundColor: '#212121' },
              }}
              hover
            >
              <TableCell component="th" scope="row">
                {project.name}
              </TableCell>
              <TableCell>{new Date(project.createdOn).toDateString()}</TableCell>
              <TableCell>{project.createdBy?.displayName || 'Unknown'}</TableCell>
              <TableCell>{project.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DashboardProjectList;
