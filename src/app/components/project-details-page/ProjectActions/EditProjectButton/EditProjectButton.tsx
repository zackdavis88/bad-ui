import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

const EditProjectButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <Box sx={{ marginRight: { xs: 0, sm: 2 }, marginBottom: { xs: 2, sm: 0 } }}>
      {disabled ? (
        <Tooltip title="You don't have permission to do this">
          <span>
            <Button variant="contained" color="info" disabled>
              <EditIcon />
              &nbsp;Edit
            </Button>
          </span>
        </Tooltip>
      ) : (
        <Button variant="contained" color="info">
          <EditIcon />
          &nbsp;Edit
        </Button>
      )}
    </Box>
  );
};

export default EditProjectButton;
