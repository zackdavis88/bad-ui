import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { GetProjectMembershipsResponse, MembershipData } from '@/app/data/apiTypes';

const getRole = (membership: MembershipData) => {
  if (membership.isProjectAdmin) {
    return 'Admin';
  }

  if (membership.isProjectManager) {
    return 'Manager';
  }

  if (membership.isProjectDeveloper) {
    return 'Developer';
  }

  return 'Viewer';
};

const MembershipsTable = ({
  memberships,
}: {
  memberships: GetProjectMembershipsResponse['memberships'];
}) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table sx={{ minWidth: 650 }} aria-label="memberships-table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Created On</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memberships.map((membership) => {
            return (
              <TableRow
                key={membership.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&.MuiTableRow-hover:hover': { backgroundColor: '#212121' },
                }}
                hover
              >
                <TableCell component="th" scope="row">
                  {membership.user.displayName}
                </TableCell>
                <TableCell>{getRole(membership)}</TableCell>
                <TableCell>{new Date(membership.createdOn).toDateString()}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MembershipsTable;
