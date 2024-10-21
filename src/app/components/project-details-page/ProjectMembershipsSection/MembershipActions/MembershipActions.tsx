import Box from '@mui/material/Box';
import { AddMembershipsButton } from './AddMembershipButton';
import { GetProjectPermissionsResponse, GetProjectResponse } from '@/app/data/apiTypes';

const MembershipActions = ({
  project,
  permissions,
}: {
  project: GetProjectResponse['project'];
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
        projectId={project.id}
        canCreateAdminMembership={permissions.canCreateAdminMembership}
      />
    </Box>
  );
};

export default MembershipActions;
