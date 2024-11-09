import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Statuses',
};

const ProjectStatusesPage = ({ params }: { params: { projectId: string } }) => {
  return <div>Statuses go here for project {params.projectId}.</div>;
};

export default ProjectStatusesPage;
