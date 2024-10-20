'use client';
import { useEffect, useActionState } from 'react';
import { editProject } from '@/app/data/actions/editProject';
import { EditProjectFormHeader } from './EditProjectFormHeader';
import { EditProjectFormBody } from './EditProjectFormBody';
import { EditProjectFormAlert } from './EditProjectFormAlert';
import { EditProjectFormInputs } from './EditProjectFormInputs';
import { EditProjectFormSubmit } from './EditProjectFormSubmit';

const EditProjectForm = ({
  handleClose,
  projectName,
  projectDescription,
  projectId,
}: {
  handleClose?: () => void;
  projectName: string;
  projectDescription: string;
  projectId: string;
}) => {
  const editProjecWithCurrentData = editProject.bind(null, {
    projectName,
    projectDescription,
    projectId,
  });
  const [editProjectState, formAction, isLoading] = useActionState(
    editProjecWithCurrentData,
    undefined
  );

  const generalErrorMessage =
    (editProjectState?.status === 'error' &&
      !editProjectState.errorField &&
      editProjectState.message) ||
    undefined;

  const nameErrorMessage =
    (editProjectState?.status === 'error' &&
      editProjectState?.errorField === 'name' &&
      editProjectState.message) ||
    undefined;

  const descriptionErrorMessage =
    (editProjectState?.status === 'error' &&
      editProjectState?.errorField === 'description' &&
      editProjectState.message) ||
    undefined;

  useEffect(() => {
    if (editProjectState?.status === 'success') {
      if (handleClose) {
        handleClose();
      }
    }
  }, [editProjectState?.status, handleClose]);

  const disabled = isLoading || editProjectState?.status === 'success';

  return (
    <form action={formAction}>
      <EditProjectFormHeader />
      <EditProjectFormBody>
        <EditProjectFormAlert errorMessage={generalErrorMessage} />
        <EditProjectFormInputs
          nameErrorMessage={nameErrorMessage}
          descriptionErrorMessage={descriptionErrorMessage}
          initialNameValue={projectName}
          initialDescriptionValue={projectDescription}
        />
        <EditProjectFormSubmit disabled={disabled} />
      </EditProjectFormBody>
    </form>
  );
};

export default EditProjectForm;
