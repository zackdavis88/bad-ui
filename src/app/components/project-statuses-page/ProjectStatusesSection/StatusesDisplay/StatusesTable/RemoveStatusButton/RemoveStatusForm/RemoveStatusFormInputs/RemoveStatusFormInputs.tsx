import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { StatusData } from '@/app/data/apiTypes';
import { ChangeEvent } from 'react';

const RemoveStatusFormInputs = ({
  status,
  confirmIsChecked,
  handleChange,
}: {
  status: Omit<StatusData, 'project'>;
  confirmIsChecked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <Box component="div" marginBottom={1}>
        <Typography variant="caption">Name:</Typography>
        <Typography variant="body1">{status.name}</Typography>
      </Box>
      <Box component="div" marginBottom={2}>
        <FormControlLabel
          control={
            <Checkbox
              checked={confirmIsChecked}
              onChange={handleChange}
              disableRipple
              disableTouchRipple
              name="confirmStatusRemoval"
              inputProps={{
                'aria-label': 'confirm status removal',
              }}
              sx={{
                color: '#FFFFFF',
                '&.Mui-checked': {
                  color: 'white',
                },
              }}
            />
          }
          label="Confirm Status Removal"
        />
      </Box>
    </>
  );
};

export default RemoveStatusFormInputs;
