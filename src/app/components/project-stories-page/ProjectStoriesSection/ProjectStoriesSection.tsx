import Box from '@mui/material/Box';
import { fetchProjectStories } from '@/app/data/fetchers/fetchProjectStories';
import { fetchProjectPermissions } from '@/app/data/fetchers/fetchProjectPermissions';
import { ProjectStoriesHeader } from './ProjectStoriesHeader';
import { StoryActions } from './StoryActions';

const ProjectStatusesSection = async ({
  projectId,
  itemsPerPage,
  page,
  titleFilter,
}: {
  projectId: string;
  itemsPerPage?: string;
  page?: string;
  titleFilter?: string;
}) => {
  const { permissions } = await fetchProjectPermissions({ projectId });
  const storiesData = await fetchProjectStories({
    projectId,
    itemsPerPage,
    page,
    titleFilter,
  });
  console.log(storiesData);

  return (
    <Box display="flex" flexDirection="column" marginBottom={8}>
      <ProjectStoriesHeader />
      <StoryActions permissions={permissions} />
      <div>TODO: Table, Pagination, Filter</div>
    </Box>
  );
};

export default ProjectStatusesSection;
