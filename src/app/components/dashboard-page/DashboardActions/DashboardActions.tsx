import Box from '@mui/material/Box';
import { CreateProjectButton } from './CreateProjectButton';

const DashboardActions = () => {
  return (
    <Box display="flex" justifyContent="flex-start">
      <CreateProjectButton />
    </Box>
  );
};

export default DashboardActions;
