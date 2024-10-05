import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const UnauthenticatedNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
          <ThumbDownAltIcon />
          <Typography
            variant="h6"
            component="div"
            display="flex"
            justifyContent="center"
            marginLeft="8px"
          >
            Bad UI
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UnauthenticatedNavbar;
