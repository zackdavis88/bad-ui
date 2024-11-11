'use client';
import { useActionState, useEffect } from 'react';
import { AddStatusFormHeader } from './AddStatusFormHeader';
import { AddStatusFormBody } from './AddStatusFormBody';
import { AddStatusFormAlert } from './AddStatusFormAlert';
import { AddStatusFormInputs } from './AddStatusFormInputs';
import { AddStatusFormSubmit } from './AddStatusFormSubmit';
import { createStatus } from '@/app/data/actions/createStatus';
import { useParams } from 'next/navigation';

const AddStatusForm = ({
  handleClose,
  statusCount,
}: {
  handleClose?: () => void;
  statusCount: number;
}) => {
  const { projectId } = useParams<{ projectId: string }>();
  const createStatusWithProjectData = createStatus.bind(null, { projectId, statusCount });
  const [createStatusState, formAction, isLoading] = useActionState(
    createStatusWithProjectData,
    undefined
  );

  const generalErrorMessage =
    (createStatusState?.status === 'error' &&
      !createStatusState.errorField &&
      createStatusState.message) ||
    undefined;

  const nameErrorMessage =
    (createStatusState?.status === 'error' &&
      createStatusState.errorField === 'name' &&
      createStatusState.message) ||
    undefined;

  useEffect(() => {
    if (createStatusState?.status === 'success') {
      if (handleClose) {
        handleClose();
      }
    }
  }, [createStatusState?.status, handleClose]);

  return (
    <form action={formAction}>
      <AddStatusFormHeader />
      <AddStatusFormBody>
        <AddStatusFormAlert errorMessage={generalErrorMessage} />
        <AddStatusFormInputs nameError={nameErrorMessage} />
        <AddStatusFormSubmit disabled={createStatusState?.status === 'success' || isLoading} />
      </AddStatusFormBody>
    </form>
  );
};

export default AddStatusForm;
