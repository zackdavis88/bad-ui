'use client';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoIcon from '@mui/icons-material/Info';
import { AlertBarContext, AlertType } from './AlertBarProvider';
import { SvgIconProps } from '@mui/material';

const getBackgroundColor = (type: AlertType) => {
  switch (type) {
    case 'success':
      return 'success.main';
    case 'error':
      return 'error.main';
    case 'info':
      return 'info.main';
    case 'warning':
      return 'warning.main';
    default:
      return undefined;
  }
};

const getIcon = (type: AlertType) => {
  const props = {
    fontSize: 'small',
    sx: {
      margin: '5px',
      width: '24px',
      height: '24px',
    },
    'aria-hidden': true,
  } satisfies SvgIconProps;

  switch (type) {
    case 'success':
      return <CheckCircleOutlineIcon {...props} />;
    case 'warning':
      return <WarningAmberIcon {...props} />;
    case 'error':
      return <ErrorOutlineIcon {...props} />;
    case 'info':
      return <InfoIcon {...props} />;
    default:
      return null;
  }
};

const AlertBar = () => {
  const { isOpen, message, type, handleClose } = useContext(AlertBarContext);
  const backgroundColor = getBackgroundColor(type);

  if (!isOpen) {
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        sx={{
          backgroundColor,
          borderRadius: 2,
          marginBottom: 2,
          color: 'text.primary',
        }}
      >
        <Box display="flex" justifyContent="space-between">
          {getIcon(type)}
          <IconButton aria-label="delete" color="inherit" size="small" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography component="div" display="flex" paddingX={1} paddingBottom={1}>
          {message}
        </Typography>
      </Box>
    </Container>
  );
};

export default AlertBar;
