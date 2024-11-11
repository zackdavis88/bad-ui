'use client';
import { useActionState, useEffect } from 'react';
import { EditStatusFormHeader } from './EditStatusFormHeader';
import { EditStatusFormBody } from './EditStatusFormBody';
import { EditStatusFormAlert } from './EditStatusFormAlert';
import { EditStatusFormInputs } from './EditStatusFormInputs';
import { EditStatusFormSubmit } from './EditStatusFormSubmit';
import { editStatus } from '@/app/data/actions/editStatus';
import { useParams } from 'next/navigation';
import { StatusData } from '@/app/data/apiTypes';

const EditStatusForm = ({
  handleClose,
  status,
}: {
  handleClose?: () => void;
  status: Omit<StatusData, 'project'>;
}) => {
  const { projectId } = useParams<{ projectId: string }>();
  const editStatusWithData = editStatus.bind(null, { projectId, statusId: status.id });
  const [editStatusState, formAction, isLoading] = useActionState(editStatusWithData, undefined);

  const generalErrorMessage =
    (editStatusState?.status === 'error' &&
      !editStatusState.errorField &&
      editStatusState.message) ||
    undefined;

  const nameErrorMessage =
    (editStatusState?.status === 'error' &&
      editStatusState.errorField === 'name' &&
      editStatusState.message) ||
    undefined;

  useEffect(() => {
    if (editStatusState?.status === 'success') {
      if (handleClose) {
        handleClose();
      }
    }
  }, [editStatusState?.status, handleClose]);

  return (
    <form action={formAction}>
      <EditStatusFormHeader />
      <EditStatusFormBody>
        <EditStatusFormAlert errorMessage={generalErrorMessage} />
        <EditStatusFormInputs name={status.name} nameError={nameErrorMessage} />
        <EditStatusFormSubmit disabled={editStatusState?.status === 'success' || isLoading} />
      </EditStatusFormBody>
    </form>
  );
};

export default EditStatusForm;
