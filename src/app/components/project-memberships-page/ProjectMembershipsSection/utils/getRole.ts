import { MembershipData } from '@/app/data/apiTypes';

export const getRole = (membership: Omit<MembershipData, 'project'>) => {
  if (membership.isProjectAdmin) {
    return 'Admin';
  }

  if (membership.isProjectManager) {
    return 'Manager';
  }

  if (membership.isProjectDeveloper) {
    return 'Developer';
  }

  return 'Viewer';
};
