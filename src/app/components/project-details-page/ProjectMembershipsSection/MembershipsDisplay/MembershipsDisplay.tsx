import { GetProjectMembershipsResponse, GetProjectPermissionsResponse } from '@/app/data/apiTypes';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MembershipsUsernameFilter } from './MembershipsUsernameFilter';
import { MembershipsPagination } from './MembershipsPagination';
import { MembershipsTable } from './MembershipsTable';

const MembershipsDisplay = ({
  membershipData,
  usernameFilter,
  permissions,
}: {
  membershipData: GetProjectMembershipsResponse;
  usernameFilter?: string;
  permissions: GetProjectPermissionsResponse['permissions'];
}) => {
  if (!usernameFilter && !membershipData.memberships.length) {
    // If this load the project is a "zombie" and no one can perform any actions on it.
    // ideally it shouldnt happen, but it is possible.
    return (
      <Typography variant="body1" marginTop={2}>
        This project has no members
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
        <MembershipsUsernameFilter usernameFilter={usernameFilter} />
        <MembershipsPagination
          itemsPerPage={membershipData.itemsPerPage}
          page={membershipData.page}
          totalItems={membershipData.totalItems}
        />
      </Box>
      <MembershipsTable memberships={membershipData.memberships} permissions={permissions} />
    </>
  );
};

export default MembershipsDisplay;
