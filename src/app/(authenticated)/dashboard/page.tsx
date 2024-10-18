import { Metadata } from 'next';
import { DashboardContent } from '@/app/components/dashboard-page';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: {
    itemsPerPage?: string;
    page?: string;
    projectName?: string;
  };
}) {
  return (
    <DashboardContent
      itemsPerPage={searchParams?.itemsPerPage}
      page={searchParams?.page}
      projectName={searchParams?.projectName}
    />
  );
}
