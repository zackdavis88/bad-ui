import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { Suspense } from 'react';
import {
  ProjectDetailsSectionSkeleton,
  ProjectMembershipsSectionSkeleton,
} from '@/app/components/skeletons/ProjectDetails';
import { ProjectDetailsSection } from './ProjectDetailsSection';
import { ProjectMembershipsSection } from './ProjectMembershipsSection';
import { ROUTES } from '@/app/constants/routes';

const ProjectDetailsPageContent = ({
  params,
  searchParams,
}: {
  params: { projectId: string };
  searchParams?: {
    membershipItemsPerPage?: string;
    membershipPage?: string;
    membershipUsernameFilter?: string;
  };
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      width="100%"
      sx={{ paddingX: { xl: 20, sm: 10, xs: 2 }, paddingTop: { sm: 5, xs: 2 } }}
    >
      <Breadcrumbs
        aria-label="project-details-breadcrumbs"
        sx={{ marginBottom: { xs: 2, sm: 3, md: 4 } }}
      >
        <Link underline="hover" color="inherit" href={ROUTES.DASHBOARD} component={NextLink}>
          Dashboard
        </Link>
        <Typography sx={{ color: 'text.primary', fontWeight: 'bold' }}>Project Details</Typography>
      </Breadcrumbs>
      <Suspense fallback={<ProjectDetailsSectionSkeleton />}>
        <ProjectDetailsSection projectId={params.projectId} />
      </Suspense>
      <Suspense fallback={<ProjectMembershipsSectionSkeleton />}>
        <ProjectMembershipsSection
          projectId={params.projectId}
          itemsPerPage={searchParams?.membershipItemsPerPage}
          page={searchParams?.membershipPage}
          usernameFilter={searchParams?.membershipUsernameFilter}
        />
      </Suspense>
    </Box>
  );
};

export default ProjectDetailsPageContent;
