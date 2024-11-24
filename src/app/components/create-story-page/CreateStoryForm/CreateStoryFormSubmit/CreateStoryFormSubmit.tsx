import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

const CreateStoryFormActions = ({
  canCreateStory,
  disabled,
}: {
  canCreateStory: boolean;
  disabled: boolean;
}) => {
  return (
    <Box component="div" display="flex" justifyContent="flex-start" marginBottom={3}>
      {!canCreateStory ? (
        <Tooltip title="You don't have permission to do this">
          <span>
            <Button variant="contained" aria-disabled disabled color="success">
              <Typography variant="button" component="span" display="flex">
                <AddIcon />
                &nbsp;Create Story
              </Typography>
            </Button>
          </span>
        </Tooltip>
      ) : (
        <Button
          variant="contained"
          sx={{ maxWidth: '200px' }}
          type="submit"
          aria-disabled={disabled}
          disabled={disabled}
          color="success"
        >
          <Typography variant="button" component="span" display="flex">
            <AddIcon />
            &nbsp;Create Story
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default CreateStoryFormActions;
