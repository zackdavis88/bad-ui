import Box from '@mui/material/Box';
import { Suspense } from 'react';
import { ProjectDetailsSectionSkeleton } from '@/app/components/skeletons/ProjectDetails';
import { ProjectDetailsSection } from './ProjectDetailsSection';

const ProjectDetailsPageContent = ({
  params,
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
      <Suspense fallback={<ProjectDetailsSectionSkeleton />}>
        <ProjectDetailsSection projectId={params.projectId} />
      </Suspense>
    </Box>
  );
};

export default ProjectDetailsPageContent;
