import { Suspense } from 'react';
import Box from '@mui/material/Box';
import { DashboardProjectsHeader } from './DashboardProjectsHeader';
import { DashboardProjectsTable } from './DashboardProjectsTable';
import { DashboardProjectsTableSkeleton } from '@/app/components/skeletons/DashboardProjectsTableSkeleton';

const DashboardProjects = ({
  itemsPerPage,
  page,
  projectName,
}: {
  itemsPerPage?: string;
  page?: string;
  projectName?: string;
}) => {
  return (
    <Box display="flex" flexDirection="column" marginTop={4}>
      <DashboardProjectsHeader />
      <Suspense fallback={<DashboardProjectsTableSkeleton />}>
        <DashboardProjectsTable page={page} itemsPerPage={itemsPerPage} projectName={projectName} />
      </Suspense>
    </Box>
  );
};

export default DashboardProjects;
