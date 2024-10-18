import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <Box
      display="flex"
      component="footer"
      minHeight="64px"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
    >
      <GitHubIcon />
      <Link href="https://github.com/zackdavis88/bad-ui" underline="hover" color="textPrimary">
        <Typography
          variant="body2"
          component="div"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box component="span" marginLeft="8px" marginRight="16px">
            UI
          </Box>
        </Typography>
      </Link>
      <Divider
        component="div"
        flexItem
        orientation="vertical"
        variant="middle"
        sx={{ borderColor: 'text.primary', marginY: 2 }}
      />
      <Link href="https://github.com/zackdavis88/bad-api" underline="hover" color="textPrimary">
        <Typography
          variant="body2"
          component="div"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box component="span" marginLeft="16px">
            API
          </Box>
        </Typography>
      </Link>
    </Box>
  );
};

export default Footer;
