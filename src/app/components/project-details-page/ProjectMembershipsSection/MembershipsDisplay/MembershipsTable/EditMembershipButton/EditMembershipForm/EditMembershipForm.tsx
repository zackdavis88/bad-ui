'use client';
import { MembershipData } from '@/app/data/apiTypes';
import { useActionState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { EditMembershipFormHeader } from './EditMembershipFormHeader';
import { EditMembershipFormBody } from './EditMembershipFormBody';
import { EditMembershipFormAlert } from './EditMembershipFormAlert';
import { EditMembershipFormInputs } from './EditMembershipFormInputs';
import { EditMembershipFormSubmit } from './EditMembershipFormSubmit';
import { editMembership } from '@/app/data/actions/editMembership';

const EditMembershipForm = ({
  handleClose,
  canUpdateAdminMembership,
  membership,
}: {
  handleClose?: () => void;
  canUpdateAdminMembership: boolean;
  membership: Omit<MembershipData, 'project'>;
}) => {
  // TODO: Lets back-track on other forms on project-display and use this hook instead of prop-drilling.
  const { projectId } = useParams<{ projectId: string }>();
  const editMembershipWithIds = editMembership.bind(null, projectId, membership);
  const [updateMembershipState, formAction, isLoading] = useActionState(
    editMembershipWithIds,
    undefined
  );

  const generalErrorMessage =
    (updateMembershipState?.status === 'error' && updateMembershipState.message) || undefined;

  useEffect(() => {
    if (updateMembershipState?.status === 'success') {
      if (handleClose) {
        handleClose();
      }
    }
  }, [updateMembershipState?.status, handleClose]);

  return (
    <form action={formAction}>
      <EditMembershipFormHeader canUpdateAdminMemberships={canUpdateAdminMembership} />
      <EditMembershipFormBody>
        <EditMembershipFormAlert errorMessage={generalErrorMessage} />
        <EditMembershipFormInputs
          membership={membership}
          canUpdateAdminMembership={canUpdateAdminMembership}
        />
        <EditMembershipFormSubmit disabled={isLoading} />
      </EditMembershipFormBody>
    </form>
  );
};

export default EditMembershipForm;
