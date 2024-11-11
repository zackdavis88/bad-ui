'use client';
import { StatusData } from '@/app/data/apiTypes';
import { useActionState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { RemoveStatusFormHeader } from './RemoveStatusFormHeader';
import { RemoveStatusFormBody } from './RemoveStatusFormBody';
import { RemoveStatusFormAlert } from './RemoveStatusFormAlert';
import { RemoveStatusFormInputs } from './RemoveStatusFormInputs';
import { RemoveStatusFormSubmit } from './RemoveStatusFormSubmit';
import { removeStatus } from '@/app/data/actions/removeStatus';

const RemoveStatusForm = ({
  handleClose,
  status,
}: {
  handleClose?: () => void;
  status: Omit<StatusData, 'project'>;
}) => {
  const { projectId } = useParams<{ projectId: string }>();
  const removeStatusWithData = removeStatus.bind(null, { projectId, statusId: status.id });
  const [removeStatusState, formAction, isLoading] = useActionState(
    removeStatusWithData,
    undefined
  );

  const generalErrorMessage =
    (removeStatusState?.status === 'error' && removeStatusState.message) || undefined;

  useEffect(() => {
    if (removeStatusState?.status === 'success') {
      if (handleClose) {
        handleClose();
      }
    }
  }, [removeStatusState?.status, handleClose]);

  return (
    <form action={formAction}>
      <RemoveStatusFormHeader />
      <RemoveStatusFormBody>
        {({ confirmIsChecked, handleChange }) => (
          <>
            <RemoveStatusFormAlert errorMessage={generalErrorMessage} />
            <RemoveStatusFormInputs
              status={status}
              confirmIsChecked={confirmIsChecked}
              handleChange={handleChange}
            />
            <RemoveStatusFormSubmit disabled={isLoading || !confirmIsChecked} />
          </>
        )}
      </RemoveStatusFormBody>
    </form>
  );
};

export default RemoveStatusForm;
