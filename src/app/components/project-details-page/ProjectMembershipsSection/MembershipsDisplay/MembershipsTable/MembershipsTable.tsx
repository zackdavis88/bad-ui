import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {
  GetProjectMembershipsResponse,
  GetProjectPermissionsResponse,
  MembershipData,
} from '@/app/data/apiTypes';
import { EditMembershipButton } from './EditMembershipButton';

const getRole = (membership: Omit<MembershipData, 'project'>) => {
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
  permissions,
}: {
  memberships: GetProjectMembershipsResponse['memberships'];
  permissions: GetProjectPermissionsResponse['permissions'];
}) => {
  const {
    canUpdateMembership,
    canRemoveMembership,
    canUpdateAdminMembership,
    canRemoveAdminMembership,
  } = permissions;
  const showActions = canUpdateMembership || canRemoveMembership;

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table sx={{ minWidth: 650 }} aria-label="memberships-table">
        <TableHead>
          <TableRow>
            {showActions && <TableCell>Actions</TableCell>}
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Created On</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memberships.map((membership) => {
            const membershipRole = getRole(membership);
            const editActionDisabled =
              (membershipRole === 'Admin' && !canUpdateAdminMembership) || !canUpdateMembership;
            const removeActionDisabled =
              (membershipRole === 'Admin' && !canRemoveAdminMembership) || !canRemoveMembership;

            return (
              <TableRow
                key={membership.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&.MuiTableRow-hover:hover': { backgroundColor: '#212121' },
                }}
                hover
              >
                {showActions && (
                  <TableCell width={100}>
                    <Box component="span" display="flex">
                      <EditMembershipButton
                        disabled={editActionDisabled}
                        membership={membership}
                        canUpdateAdminMembership={canUpdateAdminMembership}
                      />
                      <IconButton
                        sx={{ color: 'text.primary', '&.Mui-disabled': { color: '#EA818D' } }}
                        disabled={removeActionDisabled}
                        aria-disabled={removeActionDisabled}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
                <TableCell>{membership.user.displayName}</TableCell>
                <TableCell>{membershipRole}</TableCell>
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
