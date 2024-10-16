import Skeleton from '@mui/material/Skeleton';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

const ProjectListSkeleton = () => {
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
          {new Array(8).fill(null).map((_value, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectListSkeleton;
