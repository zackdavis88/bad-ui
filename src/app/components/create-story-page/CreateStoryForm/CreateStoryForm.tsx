'use client';
import { useParams, useRouter } from 'next/navigation';
import { createStory } from '@/app/data/actions/createStory';
import { useActionState, useEffect } from 'react';
import { CreateStoryFormInputs } from './CreateStoryFormInputs';
import { CreateStoryFormAlert } from './CreateStoryFormAlert';
import { CreateStoryFormSubmit } from './CreateStoryFormSubmit';

const CreateStoryForm = ({ canCreateStory }: { canCreateStory: boolean }) => {
  const router = useRouter();
  const { projectId } = useParams<{ projectId: string }>();
  const createStatusWithProjectData = createStory.bind(null, { projectId });
  const [createStoryState, formAction, isLoading] = useActionState(
    createStatusWithProjectData,
    undefined
  );

  const generalErrorMessage =
    (createStoryState?.status === 'error' &&
      !createStoryState.errorField &&
      createStoryState.message) ||
    undefined;

  const titleErrorMessage =
    (createStoryState?.status === 'error' &&
      createStoryState.errorField === 'title' &&
      createStoryState.message) ||
    undefined;

  useEffect(() => {
    if (createStoryState?.status === 'success') {
      router.push(`/projects/${projectId}/stories`);
    }
  }, [createStoryState?.status, router, projectId]);

  return (
    <form action={formAction}>
      <CreateStoryFormSubmit canCreateStory={canCreateStory} disabled={isLoading} />
      <CreateStoryFormAlert errorMessage={generalErrorMessage} />
      <CreateStoryFormInputs titleErrorMessage={titleErrorMessage} />
    </form>
  );
};

export default CreateStoryForm;
