'use client';
import React, { useState, useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import KeyIcon from '@mui/icons-material/Key';
import NavigationIcon from '@mui/icons-material/Navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter, usePathname } from 'next/navigation';

const DrawerButtonLink = ({
  icon,
  name,
  href,
  handleDrawerClose,
}: {
  icon?: React.ReactNode;
  name: string;
  href: string;
  handleDrawerClose: () => void;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isCurrentPage = pathname === href;

  const handleOnClick = useCallback(() => {
    if (isCurrentPage) {
      return handleDrawerClose();
    }

    handleDrawerClose();
    router.push(href);
  }, [router, href, handleDrawerClose, isCurrentPage]);

  return (
    <Button
      role="link"
      variant="text"
      onClick={handleOnClick}
      color="inherit"
      sx={{ marginTop: 2, backgroundColor: isCurrentPage ? 'primary.main' : null }}
    >
      <Typography
        component="span"
        variant="button"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        width="100%"
      >
        {icon}
        &nbsp;{name}
      </Typography>
    </Button>
  );
};

const MyAccountSection = ({
  displayName,
  handleDrawerClose,
}: {
  displayName: string;
  handleDrawerClose: () => void;
}) => {
  return (
    <>
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
    </>
  );
};

const NavigationSection = ({ handleDrawerClose }: { handleDrawerClose: () => void }) => {
  return (
    <>
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
    </>
  );
};

const NavbarDrawer = ({ displayName }: { displayName: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <IconButton
        size="medium"
        aria-label="open navigation menu"
        onClick={handleDrawerOpen}
        sx={{
          color: 'text.primary',
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer component="aside" open={isOpen} onClose={handleDrawerClose}>
        <Box width="300px" height="100%" display="flex" flexDirection="column" padding={2}>
          <Button
            onClick={handleDrawerClose}
            variant="text"
            color="inherit"
            aria-label="close navigation menu"
          >
            <Typography
              component="span"
              variant="button"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              width="100%"
            >
              <CloseIcon />
              &nbsp;Close
            </Typography>
          </Button>
          <NavigationSection handleDrawerClose={handleDrawerClose} />
          <MyAccountSection displayName={displayName} handleDrawerClose={handleDrawerClose} />
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
