import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { GetDashboardProjectsResponse } from '@/app/data/apiTypes';

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

const ProjectDetailsTable = ({
  dashboardProjects,
}: {
  dashboardProjects: GetDashboardProjectsResponse['projects'];
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dashboard-projects-table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Created On</TableCell>
            <TableCell>Created By</TableCell>
            <TableCell>My Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dashboardProjects.map((project) => {
            const linkHref = `/projects/${project.id}`;

            return (
              <TableRow
                key={project.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&.MuiTableRow-hover:hover': { backgroundColor: '#212121' },
                }}
                hover
                aria-describedby=""
              >
                <TableCell component="th" scope="row">
                  <RowLink href={linkHref} tabIndex={0}>
                    {project.name}
                  </RowLink>
                </TableCell>
                <TableCell>
                  <RowLink href={linkHref}>{new Date(project.createdOn).toDateString()}</RowLink>
                </TableCell>
                <TableCell>
                  <RowLink href={linkHref}>{project.createdBy?.displayName || 'Unknown'}</RowLink>
                </TableCell>
                <TableCell>
                  <RowLink href={linkHref}>{project.role}</RowLink>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectDetailsTable;
