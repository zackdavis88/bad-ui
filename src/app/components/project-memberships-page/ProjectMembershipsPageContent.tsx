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
    itemsPerPage?: string;
    page?: string;
    usernameFilter?: string;
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
          itemsPerPage={searchParams?.itemsPerPage}
          page={searchParams?.page}
          usernameFilter={searchParams?.usernameFilter}
        />
      </Suspense>
    </Box>
  );
};

export default ProjectMembershipsPageContent;
