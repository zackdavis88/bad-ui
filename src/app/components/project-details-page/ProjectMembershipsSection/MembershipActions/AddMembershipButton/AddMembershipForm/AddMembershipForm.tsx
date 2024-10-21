'use client';
import { useActionState, useEffect } from 'react';
import { AddMembershipFormHeader } from './AddMembershipFormHeader';
import { AddMembershipFormBody } from './AddMembershipFormBody';
import { AddMembershipFormAlert } from './AddMembershipFormAlert';
import { AddMembershipFormInputs } from './AddMembershipFormInputs';
import { AddMembershipFormSubmit } from './AddMembershipFormSubmit';
import { createMembership } from '@/app/data/actions/createMembership';
const AddMembershipForm = ({
  projectId,
  handleClose,
  canCreateAdminMembership,
}: {
  projectId: string;
  handleClose?: () => void;
  canCreateAdminMembership: boolean;
}) => {
  const createMembershipWithProjectId = createMembership.bind(null, projectId);
  const [createMembershipState, formAction, isLoading] = useActionState(
    createMembershipWithProjectId,
    undefined
  );

  const generalErrorMessage =
    (createMembershipState?.status === 'error' && createMembershipState.message) || undefined;

  useEffect(() => {
    if (createMembershipState?.status === 'success') {
      if (handleClose) {
        handleClose();
      }
    }
  }, [createMembershipState?.status, handleClose]);

  return (
    <form action={formAction}>
      <AddMembershipFormHeader canCreateAdminMembership={canCreateAdminMembership} />
      <AddMembershipFormBody>
        {({
          usernameInput,
          onUsernameChange,
          onUsernameBlur,
          userLookUpMessage,
          userLookUpStatus,
        }) => {
          const submitDisabled =
            isLoading ||
            createMembershipState?.status === 'success' ||
            userLookUpStatus !== 'found';
          return (
            <>
              <AddMembershipFormAlert errorMessage={generalErrorMessage} />
              <AddMembershipFormInputs
                username={usernameInput}
                onUsernameChange={onUsernameChange}
                onUsernameBlur={onUsernameBlur}
                canCreateAdminMembership={canCreateAdminMembership}
                userLookUpMessage={userLookUpMessage}
                userLookUpStatus={userLookUpStatus}
              />
              <AddMembershipFormSubmit disabled={submitDisabled} />
            </>
          );
        }}
      </AddMembershipFormBody>
    </form>
  );
};

export default AddMembershipForm;
