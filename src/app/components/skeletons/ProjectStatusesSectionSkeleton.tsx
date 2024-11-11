import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

const ProjectStatusesSectionSkeleton = () => {
  return (
    <Box display="flex" flexDirection="column" marginBottom={8}>
      {/* Statuses Header */}
      <Box display="flex" justifyContent="flex-start">
        <Divider
          orientation="horizontal"
          variant="inset"
          flexItem
          textAlign="left"
          sx={{
            marginLeft: 0,
            marginBottom: 2,
            width: '100%',
            '& > .MuiDivider-wrapper': {
              paddingLeft: 0,
            },
            '&::before': { display: 'none' },
            '&::after': { borderColor: '#ffffff', width: '100%' },
          }}
        >
          <Typography component="h1" variant="h6">
            Statuses
          </Typography>
        </Divider>
      </Box>
      {/* Statuses Actions */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column-reverse',
            sm: 'row',
          },
          justifyContent: {
            xs: 'flex-start',
            sm: 'flex-start',
          },
          marginBottom: {
            xs: 2,
          },
        }}
      >
        <Skeleton variant="rounded" width={141} height={37} />
      </Box>
      {/* Name Filter and Pagination */}
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
        <Box component="div" sx={{ marginBottom: { xs: 2, md: 0 }, width: 300 }}>
          <Skeleton variant="rounded" width={300} height={56} />
        </Box>
        <Skeleton variant="rounded" width={155} height={40} />
      </Box>
      {/* Statuses Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
        <Table aria-label="statuses-table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {new Array(8).fill(null).map((_value, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    '&.MuiTableRow-hover:hover': { backgroundColor: '#212121' },
                  }}
                  hover
                >
                  <TableCell>
                    <Skeleton variant="rounded" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectStatusesSectionSkeleton;
