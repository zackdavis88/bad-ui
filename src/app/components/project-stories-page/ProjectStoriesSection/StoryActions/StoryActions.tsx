import Box from '@mui/material/Box';
import { GetProjectPermissionsResponse } from '@/app/data/apiTypes';
import { AddStoryButton } from './AddStoryButton';

const StoryActions = ({
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
      <AddStoryButton disabled={!permissions.canCreateStory} />
    </Box>
  );
};

export default StoryActions;
