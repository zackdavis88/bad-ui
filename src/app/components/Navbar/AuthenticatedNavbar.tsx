import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HiveIcon from '@mui/icons-material/Hive';
import { NavbarDrawer } from './NavbarDrawer';
import { fetchCurrentUser } from '@/app/data/fetchers/fetchCurrentUser';

const AuthenticatedNavbar = async () => {
  const displayName = await fetchCurrentUser();

  return (
    <AppBar position="static">
      <Toolbar>
        <NavbarDrawer displayName={displayName} />
        <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AuthenticatedNavbar;
