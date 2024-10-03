import Box from '@mui/material/Box';

export default function LoginPage() {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box display="flex" component="nav">
        Navbar
      </Box>
      <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center" component="main">
        Login Form Goes Here.
      </Box>
      <Box display="flex" component="footer">
        Footer
      </Box>
    </Box>
  );
}
