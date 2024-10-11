import { useCallback } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

export default DrawerButtonLink;
