import Box from '@mui/material/Box';
import { GetProjectPermissionsResponse } from '@/app/data/apiTypes';
import { AddStatusButton } from './AddStatusButton';

const StatusActions = ({
  permissions,
  statusCount,
}: {
  permissions: GetProjectPermissionsResponse['permissions'];
  statusCount: number;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          sm: 'row',
        },
        justifyContent: {
          xs: 'flex-start',
          sm: 'flex-start',
        },
        marginBottom: {
          xs: 2,
        },
      }}
    >
      <AddStatusButton disabled={!permissions.canCreateStatus} statusCount={statusCount} />
    </Box>
  );
};

export default StatusActions;
