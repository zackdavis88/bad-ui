import HiveIcon from '@mui/icons-material/Hive';
import Typography from '@mui/material/Typography';

const Logo = () => {
  return (
    <>
      <HiveIcon />
      <Typography
        variant="h6"
        component="div"
        display="flex"
        justifyContent="center"
        marginLeft="8px"
      >
        Honeycomb
      </Typography>
    </>
  );
};

export default Logo;
