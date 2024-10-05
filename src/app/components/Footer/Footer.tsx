import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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
      <Link href="https://github.com/zackdavis88/bad-ui" underline="hover" color="textPrimary">
        <Typography
          variant="body2"
          component="div"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <GitHubIcon />
          <Box component="span" marginLeft="8px">
            Github Repo
          </Box>
        </Typography>
      </Link>
    </Box>
  );
};

export default Footer;
