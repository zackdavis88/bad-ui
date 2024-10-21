'use client';
import { useActionState, useEffect } from 'react';
import { RemoveProjectFormAlert } from './RemoveProjectFormAlert';
import { RemoveProjectFormBody } from './RemoveProjectFormBody';
import { RemoveProjectFormHeader } from './RemoveProjectFormHeader';
import { RemoveProjectFormInputs } from './RemoveProjectFormInputs';
import { RemoveProjectFormSubmit } from './RemoveProjectFormSubmit';
import { removeProject } from '@/app/data/actions/removeProject';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/constants/routes';

const RemoveProjectForm = ({
  projectId,
  projectName,
  handleClose,
}: {
  projectId: string;
  projectName: string;
  handleClose?: () => void;
}) => {
  const removeProjectWithId = removeProject.bind(null, projectId);
  const [removeProjectState, formAction, isPending] = useActionState(
    removeProjectWithId,
    undefined
  );
  const router = useRouter();

  const generalErrorMessage =
    (removeProjectState?.status === 'error' && removeProjectState.message) || undefined;

  useEffect(() => {
    if (removeProjectState?.status === 'success') {
      if (handleClose) {
        handleClose();
      }

      router.push(ROUTES.DASHBOARD);
    }
  }, [removeProjectState?.status, handleClose, router]);

  return (
    <form action={formAction}>
      <RemoveProjectFormHeader projectName={projectName} />
      <RemoveProjectFormBody>
        {({ projectNameInput, handleChange }) => (
          <>
            <RemoveProjectFormAlert errorMessage={generalErrorMessage} />
            <RemoveProjectFormInputs
              projectNameInput={projectNameInput}
              handleChange={handleChange}
            />
            <RemoveProjectFormSubmit disabled={isPending || projectNameInput !== projectName} />
          </>
        )}
      </RemoveProjectFormBody>
    </form>
  );
};

export default RemoveProjectForm;
