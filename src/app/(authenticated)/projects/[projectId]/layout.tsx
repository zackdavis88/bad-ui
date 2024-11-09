import { ProjectNavigationBar } from '@/app/components/common/ProjectNavigationBar';

const ProjectDisplayLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProjectNavigationBar />
      {children}
    </>
  );
};

export default ProjectDisplayLayout;
