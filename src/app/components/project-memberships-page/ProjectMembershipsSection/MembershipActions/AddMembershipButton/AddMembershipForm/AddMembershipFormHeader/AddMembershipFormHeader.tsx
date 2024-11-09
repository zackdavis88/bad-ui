import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AddMembershipFormHeader = ({
  canCreateAdminMembership,
}: {
  canCreateAdminMembership: boolean;
}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
      }}
    >
      <Typography variant="h6" component="h2" id="add-membership-title">
        Add Membership
      </Typography>
      <Typography variant="body2" component="h2" paddingTop={1} id="add-membership-description">
        Grant access to a user and give them authorization to perform actions
        <Box component="ul" sx={{ margin: 0, paddingLeft: 2 }}>
          {canCreateAdminMembership && (
            <Typography component="li" variant="caption" marginY={1}>
              <span style={{ fontWeight: 'bold' }}>Admin</span> - full permissions to do anything,
              including remove the project.
            </Typography>
          )}
          <Typography component="li" variant="caption" marginY={1}>
            <span style={{ fontWeight: 'bold' }}>Manager</span> - can edit project details and
            create/edit stories.
          </Typography>
          <Typography component="li" variant="caption" marginY={1}>
            <span style={{ fontWeight: 'bold' }}>Developer</span> - can create/edit stories.
          </Typography>
          <Typography component="li" variant="caption" marginY={1}>
            <span style={{ fontWeight: 'bold' }}>Viewer</span> - can only view project and story
            details.
          </Typography>
        </Box>
      </Typography>
    </Box>
  );
};

export default AddMembershipFormHeader;
