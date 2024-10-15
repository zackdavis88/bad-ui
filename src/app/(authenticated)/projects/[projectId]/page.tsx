export default async function ProjectDisplay({ params }: { params: { projectId: string } }) {
  return <div>Project details for id {params.projectId}</div>;
}
