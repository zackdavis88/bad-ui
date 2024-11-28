import { Suspense } from 'react';
import Box from '@mui/material/Box';
import { ProjectStoriesSection } from './ProjectStoriesSection';

const ProjectStoriesPageContent = ({
  params,
  searchParams,
}: {
  params: {
    projectId: string;
  };
  searchParams?: {
    itemsPerPage?: string;
    page?: string;
    titleFilter?: string;
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
      <Suspense fallback={<div>TODO: Skeleton</div>}>
        <ProjectStoriesSection
          projectId={params.projectId}
          itemsPerPage={searchParams?.itemsPerPage}
          page={searchParams?.page}
          titleFilter={searchParams?.titleFilter}
        />
      </Suspense>
    </Box>
  );
};

export default ProjectStoriesPageContent;
