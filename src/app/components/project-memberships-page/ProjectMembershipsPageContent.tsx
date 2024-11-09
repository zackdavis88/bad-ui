import Box from '@mui/material/Box';
import { Suspense } from 'react';
import { ProjectMembershipsSectionSkeleton } from '@/app/components/skeletons/ProjectDetails';
import { ProjectMembershipsSection } from './ProjectMembershipsSection';

const ProjectMembershipsPageContent = ({
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

export default ProjectMembershipsPageContent;
