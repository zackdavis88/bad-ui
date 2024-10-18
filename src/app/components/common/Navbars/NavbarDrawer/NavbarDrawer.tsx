'use client';
import React, { useState, useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavigationSection, MyAccountSection } from './NavbarDrawerSections';

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
          <MyAccountSection displayName={displayName} handleDrawerClose={handleDrawerClose} />
          <NavigationSection handleDrawerClose={handleDrawerClose} />
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
