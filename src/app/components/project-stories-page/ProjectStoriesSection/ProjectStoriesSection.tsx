import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchProjectStories } from '@/app/data/fetchers/fetchProjectStories';
import { fetchProjectPermissions } from '@/app/data/fetchers/fetchProjectPermissions';
import { ProjectStoriesHeader } from './ProjectStoriesHeader';
import { StoryActions } from './StoryActions';
import { StoriesDisplay } from './StoriesDisplay';

const ProjectStoriesSection = async ({
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

  if (!permissions.canReadStory) {
    return (
      <Typography variant="body1" marginTop={2}>
        You do not have permissions to view stories for this project
      </Typography>
    );
  }

  return (
    <Box display="flex" flexDirection="column" marginBottom={8}>
      <ProjectStoriesHeader />
      <StoryActions permissions={permissions} />
      <StoriesDisplay
        storiesData={storiesData}
        permissions={permissions}
        titleFilter={titleFilter}
      />
    </Box>
  );
};

export default ProjectStoriesSection;
