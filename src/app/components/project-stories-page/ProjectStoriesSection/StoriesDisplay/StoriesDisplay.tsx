import { GetProjectStoriesResponse, GetProjectPermissionsResponse } from '@/app/data/apiTypes';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StoriesTitleFilter } from './StoriesTitleFilter';
import { StoriesPagination } from './StoriesPagination';
import { StoriesTable } from './StoriesTable';

const StoriesDisplay = ({
  storiesData,
  titleFilter,
  permissions,
}: {
  storiesData: GetProjectStoriesResponse;
  titleFilter?: string;
  permissions: GetProjectPermissionsResponse['permissions'];
}) => {
  if (!titleFilter && !storiesData.stories.length) {
    return (
      <Typography variant="body1" marginTop={2}>
        This project has no stories
      </Typography>
    );
  }

  return (
    <>
      <Box
        sx={{
          marginY: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-end' },
          justifyContent: { md: 'space-between' },
          '& .MuiTablePagination-spacer': {
            display: 'none',
          },
          '& .MuiTablePagination-root p': {
            marginBottom: 1,
          },
          '& .MuiTablePagination-root > .MuiToolbar-root': {
            alignItems: 'flex-end',
            paddingLeft: 0,
          },
        }}
      >
        <StoriesTitleFilter titleFilter={titleFilter} />
        <StoriesPagination
          itemsPerPage={storiesData.itemsPerPage}
          page={storiesData.page}
          totalItems={storiesData.totalItems}
        />
      </Box>
      <StoriesTable
        stories={storiesData.stories}
        permissions={permissions}
        projectId={storiesData.project.id}
      />
    </>
  );
};

export default StoriesDisplay;
