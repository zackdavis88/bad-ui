'use client';
import { MembershipData } from '@/app/data/apiTypes';
import { useActionState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { RemoveMembershipFormHeader } from './RemoveMembershipFormHeader';
import { RemoveMembershipFormBody } from './RemoveMembershipFormBody';
import { RemoveMembershipFormAlert } from './RemoveMembershipFormAlert';
import { RemoveMembershipFormInputs } from './RemoveMembershipFormInputs';
import { RemoveMembershipFormSubmit } from './RemoveMembershipFormSubmit';
import { removeMembership } from '@/app/data/actions/removeMembership';

const RemoveMembershipForm = ({
  handleClose,
  membership,
}: {
  handleClose?: () => void;
  membership: Omit<MembershipData, 'project'>;
}) => {
  const { projectId } = useParams<{ projectId: string }>();
  const removeMembershipWithData = removeMembership.bind(null, projectId, membership);
  const [removeMembershipState, formAction, isLoading] = useActionState(
    removeMembershipWithData,
    undefined
  );

  const generalErrorMessage =
    (removeMembershipState?.status === 'error' && removeMembershipState.message) || undefined;

  useEffect(() => {
    if (removeMembershipState?.status === 'success') {
      if (handleClose) {
        handleClose();
      }
    }
  }, [removeMembershipState?.status, handleClose]);

  return (
    <form action={formAction}>
      <RemoveMembershipFormHeader />
      <RemoveMembershipFormBody>
        {({ confirmIsChecked, handleChange }) => (
          <>
            <RemoveMembershipFormAlert errorMessage={generalErrorMessage} />
            <RemoveMembershipFormInputs
              membership={membership}
              confirmIsChecked={confirmIsChecked}
              handleChange={handleChange}
            />
            <RemoveMembershipFormSubmit disabled={isLoading || !confirmIsChecked} />
          </>
        )}
      </RemoveMembershipFormBody>
    </form>
  );
};

export default RemoveMembershipForm;
