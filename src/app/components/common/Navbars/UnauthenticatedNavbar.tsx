import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Logo } from './Logo';

const UnauthenticatedNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
          <Logo />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UnauthenticatedNavbar;
