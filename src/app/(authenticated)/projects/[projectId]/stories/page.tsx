import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Stories',
};

const ProjectStoriesPage = ({ params }: { params: { projectId: string } }) => {
  return <div>Stories go here for project {params.projectId}.</div>;
};

export default ProjectStoriesPage;
