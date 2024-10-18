import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

const ChangePasswordFormAlert = ({ errorMessage }: { errorMessage?: string }) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <Box marginBottom={2}>
      <Alert variant="filled" icon={false} severity="error">
        {errorMessage}
      </Alert>
    </Box>
  );
};

export default ChangePasswordFormAlert;
