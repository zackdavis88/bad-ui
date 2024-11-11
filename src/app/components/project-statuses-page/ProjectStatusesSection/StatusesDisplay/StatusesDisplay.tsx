import { GetProjectStatusesResponse, GetProjectPermissionsResponse } from '@/app/data/apiTypes';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StatusesNameFilter } from './StatusesNameFilter';
import { StatusesPagination } from './StatusesPagination';
import { StatusesTable } from './StatusesTable';

const StatusesDisplay = ({
  statusesData,
  nameFilter,
  permissions,
}: {
  statusesData: GetProjectStatusesResponse;
  nameFilter?: string;
  permissions: GetProjectPermissionsResponse['permissions'];
}) => {
  if (!nameFilter && !statusesData.statuses.length) {
    return (
      <Typography variant="body1" marginTop={2}>
        This project has no statuses
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
        <StatusesNameFilter nameFilter={nameFilter} />
        <StatusesPagination
          itemsPerPage={statusesData.itemsPerPage}
          page={statusesData.page}
          totalItems={statusesData.totalItems}
        />
      </Box>
      <StatusesTable statuses={statusesData.statuses} permissions={permissions} />
    </>
  );
};

export default StatusesDisplay;
