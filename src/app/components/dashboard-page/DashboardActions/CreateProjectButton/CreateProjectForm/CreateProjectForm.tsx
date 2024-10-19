'use client';
import { useEffect, useActionState } from 'react';
import { createProject } from '@/app/data/actions/createProject';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CreateProjectFormHeader } from './CreateProjectFormHeader';
import { CreateProjectFormBody } from './CreateProjectFormBody';
import { CreateProjectFormAlert } from './CreateProjectFormAlert';
import { CreateProjectFormInputs } from './CreateProjectFormInputs';
import { CreateProjectFormSubmit } from './CreateProjectFormSubmit';

const CreateProjectForm = ({ handleClose }: { handleClose?: () => void }) => {
  const [createProjectState, formAction, isLoading] = useActionState(createProject, undefined);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const generalErrorMessage =
    (createProjectState?.status === 'error' &&
      !createProjectState.errorField &&
      createProjectState.message) ||
    undefined;

  const nameErrorMessage =
    (createProjectState?.status === 'error' &&
      createProjectState?.errorField === 'name' &&
      createProjectState.message) ||
    undefined;

  const descriptionErrorMessage =
    (createProjectState?.status === 'error' &&
      createProjectState?.errorField === 'description' &&
      createProjectState.message) ||
    undefined;

  useEffect(() => {
    if (createProjectState?.status === 'success') {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.set('page', '1');
      router.push(`${pathname}?${updatedSearchParams.toString()}`);

      if (handleClose) {
        handleClose();
      }
    }
  }, [createProjectState?.status, handleClose, pathname, router, searchParams]);

  const disabled = isLoading || createProjectState?.status === 'success';

  return (
    <form action={formAction}>
      <CreateProjectFormHeader />
      <CreateProjectFormBody>
        <CreateProjectFormAlert errorMessage={generalErrorMessage} />
        <CreateProjectFormInputs
          nameErrorMessage={nameErrorMessage}
          descriptionErrorMessage={descriptionErrorMessage}
        />
        <CreateProjectFormSubmit disabled={disabled} />
      </CreateProjectFormBody>
    </form>
  );
};

export default CreateProjectForm;
