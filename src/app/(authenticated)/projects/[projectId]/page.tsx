import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Details',
};

export default async function ProjectDisplay({ params }: { params: { projectId: string } }) {
  return <div>Project details for id {params.projectId}</div>;
}
