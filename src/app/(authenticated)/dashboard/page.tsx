import { fetchProjects } from '@/app/data/fetchers/fetchProjects';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

export default async function DashboardPage() {
  const projectData = await fetchProjects();
  return (
    <>
      <div>Dashboard</div>
      <Link href="/logout" component={NextLink}>
        Logout
      </Link>
    </>
  );
}
