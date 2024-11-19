import Box from '@mui/material/Box';
import { CreateStoryHeader } from './CreateStoryHeader';
import { CreateStoryForm } from './CreateStoryForm';

const CreateStoryPageContent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      width="100%"
      sx={{ paddingX: { xl: 20, sm: 10, xs: 2 }, paddingTop: { sm: 5, xs: 2 } }}
    >
      <CreateStoryHeader />
      <CreateStoryForm />
    </Box>
  );
};

export default CreateStoryPageContent;
