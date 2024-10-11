import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import KeyIcon from '@mui/icons-material/Key';
import NavigationIcon from '@mui/icons-material/Navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DrawerButtonLink from './DrawerButtonLink';

export const MyAccountSection = ({
  displayName,
  handleDrawerClose,
}: {
  displayName: string;
  handleDrawerClose: () => void;
}) => {
  return (
    <Box width="100%" display="flex" flexDirection="column" flexGrow={0.1}>
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          marginTop: 2,
          '&::before': { borderColor: (theme) => theme.palette.text.primary },
          '&::after': { borderColor: (theme) => theme.palette.text.primary },
        }}
      >
        <Typography
          variant="subtitle2"
          component="h3"
          display="flex"
          alignItems="center"
          color="textPrimary"
        >
          <ManageAccountsIcon fontSize="small" />
          &nbsp;My Account
        </Typography>
      </Divider>
      <Typography variant="body1">Username:</Typography>
      <Typography variant="body2" overflow="hidden" textOverflow="ellipsis">
        {displayName}
      </Typography>
      <DrawerButtonLink
        icon={<KeyIcon fontSize="small" />}
        name="Change Password"
        href="/change-password"
        handleDrawerClose={handleDrawerClose}
      />
      <DrawerButtonLink
        icon={<LogoutIcon fontSize="small" />}
        name="Logout"
        href="/logout"
        handleDrawerClose={handleDrawerClose}
      />
    </Box>
  );
};

export const NavigationSection = ({ handleDrawerClose }: { handleDrawerClose: () => void }) => {
  return (
    <Box width="100%" display="flex" flexDirection="column" flexGrow={0.9}>
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        flexItem
        sx={{
          marginTop: 2,
          '&::before': { borderColor: (theme) => theme.palette.text.primary },
          '&::after': { borderColor: (theme) => theme.palette.text.primary },
        }}
      >
        <Typography
          variant="subtitle2"
          component="h3"
          display="flex"
          alignItems="center"
          color="textPrimary"
        >
          <NavigationIcon fontSize="small" />
          &nbsp;Navigation
        </Typography>
      </Divider>
      <DrawerButtonLink name="Dashboard" href="/dashboard" handleDrawerClose={handleDrawerClose} />
    </Box>
  );
};
