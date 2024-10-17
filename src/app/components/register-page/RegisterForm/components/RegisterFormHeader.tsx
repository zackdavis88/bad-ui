import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RegisterFormHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        padding: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="body2" component="h1" fontWeight="bold">
        Username requirements:
        <ul style={{ marginTop: 0, fontWeight: 'normal' }}>
          <li>alphanumeric characters only</li>
        </ul>
        Password requirements:
        <ul style={{ margin: 0, fontWeight: 'normal' }}>
          <li>8 characters minimum</li>
          <li>must have at least 1 uppercase, lowercase, and number character</li>
        </ul>
      </Typography>
    </Box>
  );
};

export default RegisterFormHeader;
