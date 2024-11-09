import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { MembershipData } from '@/app/data/apiTypes';

const radioStyle = {
  color: 'text.primary',
  '&.Mui-checked': {
    color: 'text.primary',
  },
};

const getDefaultRole = (membership: Omit<MembershipData, 'project'>) => {
  if (membership.isProjectAdmin) {
    return 'isProjectAdmin';
  }

  if (membership.isProjectManager) {
    return 'isProjectManager';
  }

  if (membership.isProjectDeveloper) {
    return 'isProjectDeveloper';
  }

  return 'isProjectViewer';
};

const EditMembershipFormInputs = ({
  membership,
  canUpdateAdminMembership,
}: {
  membership: Omit<MembershipData, 'project'>;
  canUpdateAdminMembership: boolean;
}) => {
  return (
    <>
      <Box component="div" marginBottom={4}>
        <Typography variant="caption">Username:</Typography>
        <Typography variant="body1">{membership.user.displayName}</Typography>
      </Box>
      <Box marginBottom={4}>
        <FormControl
          sx={{
            '& > label': {
              color: 'text.primary',
              '&.Mui-focused': {
                color: 'text.primary',
              },
            },
          }}
        >
          <FormLabel id="membership-role-label">Role</FormLabel>
          <RadioGroup
            row
            aria-labelledby="membership-role-label"
            defaultValue={getDefaultRole(membership)}
            name="membershipRole"
          >
            {canUpdateAdminMembership && (
              <FormControlLabel
                value="isProjectAdmin"
                control={<Radio sx={radioStyle} />}
                label="Admin"
              />
            )}
            <FormControlLabel
              value="isProjectManager"
              control={<Radio sx={radioStyle} />}
              label="Manager"
            />
            <FormControlLabel
              value="isProjectDeveloper"
              control={<Radio sx={radioStyle} />}
              label="Developer"
            />
            <FormControlLabel
              value="isProjectViewer"
              control={<Radio sx={radioStyle} />}
              label="Viewer"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default EditMembershipFormInputs;
