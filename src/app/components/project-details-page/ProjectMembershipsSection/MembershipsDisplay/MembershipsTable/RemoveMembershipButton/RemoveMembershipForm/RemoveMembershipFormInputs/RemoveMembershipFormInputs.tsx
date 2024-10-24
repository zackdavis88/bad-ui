import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { MembershipData } from '@/app/data/apiTypes';
import { ChangeEvent } from 'react';
import { getRole } from '@/app/components/project-details-page/ProjectMembershipsSection/utils/getRole';

const RemoveMembershipFormInputs = ({
  membership,
  confirmIsChecked,
  handleChange,
}: {
  membership: Omit<MembershipData, 'project'>;
  confirmIsChecked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <Box component="div" marginBottom={1}>
        <Typography variant="caption">Username:</Typography>
        <Typography variant="body1">{membership.user.displayName}</Typography>
      </Box>
      <Box component="div" marginBottom={2}>
        <Typography variant="caption">Role:</Typography>
        <Typography variant="body1">{getRole(membership)}</Typography>
      </Box>
      <Box component="div" marginBottom={2}>
        <FormControlLabel
          control={
            <Checkbox
              checked={confirmIsChecked}
              onChange={handleChange}
              disableRipple
              disableTouchRipple
              name="confirmMembershipRemoval"
              inputProps={{
                'aria-label': 'confirm membership removal',
              }}
              sx={{
                color: '#FFFFFF',
                '&.Mui-checked': {
                  color: 'white',
                },
              }}
            />
          }
          label="Confirm Membership Removal"
        />
      </Box>
    </>
  );
};

export default RemoveMembershipFormInputs;
