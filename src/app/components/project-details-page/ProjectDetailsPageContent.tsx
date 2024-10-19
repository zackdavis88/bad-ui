import Box from '@mui/material/Box';
import { Suspense } from 'react';
import { ProjectActions } from './ProjectActions';

const ProjectDetailsPageContent = ({ params }: { params: { projectId: string } }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      width="100%"
      sx={{ paddingX: { xl: 20, sm: 10, xs: 2 }, paddingTop: { sm: 5, xs: 2 } }}
    >
      <Suspense fallback={<div>TODO: Add a skeleton here</div>}>
        <ProjectActions projectId={params.projectId} />
      </Suspense>
    </Box>
  );
};

export default ProjectDetailsPageContent;
