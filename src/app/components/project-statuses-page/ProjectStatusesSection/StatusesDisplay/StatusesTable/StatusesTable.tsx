import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { GetProjectStatusesResponse, GetProjectPermissionsResponse } from '@/app/data/apiTypes';
import { EditStatusButton } from './EditStatusButton';
import { RemoveStatusButton } from './RemoveStatusButton';

const StatusesTable = ({
  statuses,
  permissions,
}: {
  statuses: GetProjectStatusesResponse['statuses'];
  permissions: GetProjectPermissionsResponse['permissions'];
}) => {
  const { canUpdateStatus, canRemoveStatus } = permissions;
  const showActions = canUpdateStatus || canRemoveStatus;

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table aria-label="statuses-table">
        <TableHead>
          <TableRow>
            {showActions && <TableCell>Actions</TableCell>}
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statuses.map((status) => {
            return (
              <TableRow
                key={status.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&.MuiTableRow-hover:hover': { backgroundColor: '#212121' },
                }}
                hover
              >
                {showActions && (
                  <TableCell width={100}>
                    <Box component="span" display="flex">
                      <EditStatusButton disabled={!canUpdateStatus} status={status} />
                      <RemoveStatusButton disabled={!canRemoveStatus} status={status} />
                    </Box>
                  </TableCell>
                )}
                <TableCell>{status.name}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatusesTable;
