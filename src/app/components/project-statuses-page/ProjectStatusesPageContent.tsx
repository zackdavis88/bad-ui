import { Suspense } from 'react';
import Box from '@mui/material/Box';
import { ProjectStatusesSection } from './ProjectStatusesSection';
import ProjectStatusesSectionSkeleton from '@/app/components/skeletons/ProjectStatusesSectionSkeleton';

const ProjectStatusesPageContent = ({
  params,
  searchParams,
}: {
  params: {
    projectId: string;
  };
  searchParams?: {
    itemsPerPage?: string;
    page?: string;
    nameFilter?: string;
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
      <Suspense fallback={<ProjectStatusesSectionSkeleton />}>
        <ProjectStatusesSection
          projectId={params.projectId}
          itemsPerPage={searchParams?.itemsPerPage}
          page={searchParams?.page}
          nameFilter={searchParams?.nameFilter}
        />
      </Suspense>
    </Box>
  );
};

export default ProjectStatusesPageContent;
