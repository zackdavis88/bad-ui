import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { DetailsWithMarkdownPreview } from './DetailsWithMarkdownPreview';

const CreateStoryFormInputs = ({ titleErrorMessage }: { titleErrorMessage?: string }) => {
  return (
    <>
      <Box maxWidth="500px" marginBottom={4}>
        <TextField
          id="title-input"
          label="Title"
          variant="outlined"
          name="title"
          required
          fullWidth
          error={!!titleErrorMessage}
          helperText={titleErrorMessage}
        />
      </Box>
      <DetailsWithMarkdownPreview />
    </>
  );
};

export default CreateStoryFormInputs;
