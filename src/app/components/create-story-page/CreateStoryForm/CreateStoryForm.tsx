'use client';
import { useParams } from 'next/navigation';
import { createStory } from '@/app/data/actions/createStory';
import { useActionState } from 'react';

const CreateStoryForm = () => {
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

  return (
    <form action={formAction}>
      <></>
    </form>
  );
};

export default CreateStoryForm;
