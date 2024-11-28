import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { GetProjectStoriesResponse, GetProjectPermissionsResponse } from '@/app/data/apiTypes';
import { EditStoryButton } from './EditStoryButton';
import { RemoveStoryButton } from './RemoveStoryButton';

const RowLink = ({
  href,
  children,
  tabIndex,
}: {
  href: string;
  children: React.ReactNode;
  tabIndex?: number;
}) => {
  return (
    <Link
      href={href}
      component={NextLink}
      color="textPrimary"
      underline="none"
      sx={{ display: 'block' }}
      tabIndex={typeof tabIndex === 'number' ? tabIndex : -1}
    >
      {children}
    </Link>
  );
};

const StoriesTable = ({
  stories,
  permissions,
  projectId,
}: {
  stories: GetProjectStoriesResponse['stories'];
  permissions: GetProjectPermissionsResponse['permissions'];
  projectId: string;
}) => {
  const { canUpdateStory, canRemoveStory } = permissions;
  const showActions = canUpdateStory || canRemoveStory;

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table aria-label="stories-table">
        <TableHead>
          <TableRow>
            {showActions && <TableCell>Actions</TableCell>}
            <TableCell>Title</TableCell>
            <TableCell>Created On</TableCell>
            <TableCell>Created By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stories.map((story) => {
            const storyHref = `/projects/${projectId}/stories/${story.id}`;
            return (
              <TableRow
                key={story.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&.MuiTableRow-hover:hover': { backgroundColor: '#212121' },
                }}
                hover
              >
                {showActions && (
                  <TableCell width={100}>
                    <Box component="span" display="flex">
                      <EditStoryButton disabled={!canUpdateStory} story={story} />
                      <RemoveStoryButton disabled={!canRemoveStory} story={story} />
                    </Box>
                  </TableCell>
                )}
                <TableCell>
                  <RowLink href={storyHref} tabIndex={0}>
                    {story.title}
                  </RowLink>
                </TableCell>
                <TableCell>
                  <RowLink href={storyHref}>{new Date(story.createdOn).toDateString()}</RowLink>
                </TableCell>
                <TableCell>
                  <RowLink href={storyHref}>{story.createdBy?.displayName || 'Unknown'}</RowLink>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StoriesTable;
