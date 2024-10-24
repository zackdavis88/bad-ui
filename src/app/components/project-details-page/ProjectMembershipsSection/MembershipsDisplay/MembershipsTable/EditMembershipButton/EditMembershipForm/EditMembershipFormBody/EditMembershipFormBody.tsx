import Box from '@mui/material/Box';

const EditMembershipFormBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        padding: 2,
        border: '1px solid',
        borderColor: 'primary.main',
        borderTop: 'none',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  );
};

export default EditMembershipFormBody;
