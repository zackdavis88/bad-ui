import Box from '@mui/material/Box';
import { Suspense } from 'react';
import { ProjectActions } from './ProjectActions';
import { ProjectActionsSkeleton } from '@/app/components/skeletons/ProjectDetails';

const ProjectDetailsPageContent = ({ params }: { params: { projectId: string } }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      width="100%"
      sx={{ paddingX: { xl: 20, sm: 10, xs: 2 }, paddingTop: { sm: 5, xs: 2 } }}
    >
      <Suspense fallback={<ProjectActionsSkeleton />}>
        <ProjectActions projectId={params.projectId} />
      </Suspense>
    </Box>
  );
};

export default ProjectDetailsPageContent;
