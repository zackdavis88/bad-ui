import { Suspense } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CreateProjectButton } from '@/app/components/CreateProjectButton';
import { DashboardProjectList } from '@/app/components/DashboardProjectList';
import { ProjectListSkeleton } from '@/app/components/ProjectListSkeleton';

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: {
    itemsPerPage?: string;
    page?: string;
  };
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      width="100%"
      sx={{ paddingX: { xl: 20, sm: 10, xs: 2 }, paddingTop: { sm: 5, xs: 2 } }}
    >
      {/* Create Project Section */}
      <Box display="flex" justifyContent="flex-start">
        <CreateProjectButton />
      </Box>
      {/* Projects Section */}
      <Box display="flex" flexDirection="column" marginTop={4}>
        {/* Projects Section Header */}
        <Box display="flex" justifyContent="flex-start">
          <Divider
            orientation="horizontal"
            variant="inset"
            flexItem
            textAlign="left"
            sx={{
              marginLeft: 0,
              width: '100%',
              '& > .MuiDivider-wrapper': {
                paddingLeft: 0,
              },
              '&::before': { display: 'none' },
              '&::after': { borderColor: '#ffffff', width: '100%' },
            }}
          >
            <Typography component="h1" variant="h6">
              My Projects
            </Typography>
          </Divider>
        </Box>
        <Suspense fallback={<ProjectListSkeleton />}>
          <DashboardProjectList
            page={searchParams?.page}
            itemsPerPage={searchParams?.itemsPerPage}
          />
        </Suspense>
      </Box>
    </Box>
  );
}
