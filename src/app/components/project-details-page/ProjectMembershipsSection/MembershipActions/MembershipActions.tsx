import Box from '@mui/material/Box';
import { AddMembershipsButton } from './AddMembershipButton';
import { GetProjectPermissionsResponse } from '@/app/data/apiTypes';

const MembershipActions = ({
  permissions,
}: {
  permissions: GetProjectPermissionsResponse['permissions'];
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
      <AddMembershipsButton
        disabled={!permissions.canCreateMembership}
        canCreateAdminMembership={permissions.canCreateAdminMembership}
      />
    </Box>
  );
};

export default MembershipActions;
