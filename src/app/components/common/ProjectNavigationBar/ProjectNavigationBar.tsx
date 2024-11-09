'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useParams, usePathname } from 'next/navigation';
import { ProjectNavigationButton } from './ProjectNavigationButton';
import { useMemo } from 'react';
import { ROUTES } from '@/app/constants/routes';

const ProjectNavigationBar = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const pathname = usePathname();

  const projectNavButtons = useMemo(() => {
    const PROJECT_BASE_ROUTE = `/projects/${projectId}`;
    const PROJECT_MEMBERSHIPS_ROUTE = `${PROJECT_BASE_ROUTE}/memberships`;
    const PROJECT_STATUSES_ROUTE = `${PROJECT_BASE_ROUTE}/statuses`;
    const PROJECT_STORIES_ROUTE = `${PROJECT_BASE_ROUTE}/stories`;

    return [
      {
        label: 'Dashboard',
        href: ROUTES.DASHBOARD,
      },
      {
        label: 'Details',
        href: PROJECT_BASE_ROUTE,
        isActive: pathname === PROJECT_BASE_ROUTE,
      },
      {
        label: 'Memberships',
        href: PROJECT_MEMBERSHIPS_ROUTE,
        isActive: pathname === PROJECT_MEMBERSHIPS_ROUTE,
      },
      {
        label: 'Statuses',
        href: PROJECT_STATUSES_ROUTE,
        isActive: pathname === PROJECT_STATUSES_ROUTE,
      },
      {
        label: 'Stories',
        href: PROJECT_STORIES_ROUTE,
        isActive: pathname === PROJECT_STORIES_ROUTE,
      },
    ];
  }, [projectId, pathname]);

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: '#353535' }}
      component="nav"
      role="navigation"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          paddingX: 4,
          paddingY: {
            xs: 2,
            sm: 0,
          },
          justifyContent: {
            sm: 'center',
          },
          alignItems: {
            sm: 'center',
          },
          '& > button:not(:last-child)': {
            marginRight: {
              xs: 0,
              sm: 1,
            },
            marginBottom: {
              xs: 1,
              sm: 0,
            },
          },
          minHeight: '62px',
        }}
      >
        {projectNavButtons.map((navButtonProps, index) => (
          <ProjectNavigationButton key={index} {...navButtonProps} />
        ))}
      </Box>
    </AppBar>
  );
};

export default ProjectNavigationBar;
