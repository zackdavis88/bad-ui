import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Logo } from './Logo';
import { NavbarDrawer } from './NavbarDrawer';
import { fetchCurrentUser } from '@/app/data/fetchers/fetchCurrentUser';

const AuthenticatedNavbar = async () => {
  const displayName = await fetchCurrentUser();

  return (
    <AppBar position="static">
      <Toolbar>
        <NavbarDrawer displayName={displayName} />
        <Box
          display="flex"
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
          marginLeft="-40px"
        >
          <Logo />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AuthenticatedNavbar;
