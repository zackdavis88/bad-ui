'use client';
import { useCallback } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

const ProjectNavigationButton = ({
  label,
  href,
  isActive,
}: {
  label: string;
  href: string;
  isActive?: boolean;
}) => {
  const router = useRouter();
  const navigateToPage = useCallback(() => {
    if (!isActive) {
      router.push(href);
    }
  }, [router, href, isActive]);

  return (
    <Button
      variant="text"
      role="link"
      onClick={navigateToPage}
      sx={{
        height: 'fit-content',
        backgroundColor: isActive ? 'primary.main' : undefined,
        '&:hover': { backgroundColor: isActive ? undefined : '#595959' },
      }}
    >
      <Typography
        color="textPrimary"
        component="span"
        variant="subtitle2"
        textTransform="none"
        display="flex"
        justifyContent="center"
        width="100%"
      >
        {label}
      </Typography>
    </Button>
  );
};

export default ProjectNavigationButton;
