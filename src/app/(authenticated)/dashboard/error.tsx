'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MoodBadIcon from '@mui/icons-material/MoodBad';

const ErrorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      component="main"
    >
      <MoodBadIcon aria-hidden fontSize="large" sx={{ height: 65, width: 65 }} />
      <Typography component="h1" variant="h6" marginTop={2}>
        Something Went Wrong!
      </Typography>
      <Typography variant="body2" marginY={2}>
        Reload the page or try again later
      </Typography>
    </Box>
  );
};

export default ErrorPage;
