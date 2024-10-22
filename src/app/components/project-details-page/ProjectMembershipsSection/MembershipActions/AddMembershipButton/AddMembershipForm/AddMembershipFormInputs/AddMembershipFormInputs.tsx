import { ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const radioStyle = {
  color: 'text.primary',
  '&.Mui-checked': {
    color: 'text.primary',
  },
};

const AddMembershipFormInputs = ({
  username,
  onUsernameChange,
  onUsernameBlur,
  userLookUpMessage,
  userLookUpStatus,
}: {
  username: string;
  onUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onUsernameBlur: () => void;
  canCreateAdminMembership: boolean;
  userLookUpMessage: string | undefined;
  userLookUpStatus: 'found' | 'notFound' | undefined;
}) => {
  return (
    <>
      <Box component="div" marginBottom={4}>
        <TextField
          id="username-input"
          label="Username"
          variant="filled"
          color="primary"
          name="username"
          required
          fullWidth
          value={username}
          onChange={onUsernameChange}
          onBlur={onUsernameBlur}
          error={userLookUpStatus === 'notFound'}
          helperText={userLookUpStatus === 'notFound' && userLookUpMessage}
        />
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
            defaultValue="isProjectViewer"
            name="membershipRole"
          >
            <FormControlLabel
              value="isProjectAdmin"
              control={<Radio sx={radioStyle} />}
              label="Admin"
            />
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

export default AddMembershipFormInputs;
