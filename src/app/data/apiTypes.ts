interface UserData {
  username: string;
  displayName: string;
  createdOn: Date;
  updatedOn?: Date | null;
  deletedOn?: Date | null;
}

interface ProjectData {
  id: string;
  name: string;
  description?: string | null;
  createdOn: Date;
  updatedOn?: Date | null;
  deletedOn?: Date | null;
  createdBy: Pick<UserData, 'username' | 'displayName'> | null;
  updatedBy?: Pick<UserData, 'username' | 'displayName'> | null;
  deletedBy?: Pick<UserData, 'username' | 'displayName'> | null;
}

interface DashboardProjectData extends ProjectData {
  role: 'Admin' | 'Manager' | 'Developer' | 'Viewer';
}

interface PaginationData {
  page: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface CreateUserResponse {
  message: string;
  user: UserData;
}

export interface CreateProjectResponse {
  message: string;
  project: ProjectData;
}

export interface GetProjectsResponse extends PaginationData {
  message: string;
  projects: ProjectData[];
}

export interface GetDashboardProjectsResponse extends PaginationData {
  message: string;
  projects: DashboardProjectData[];
}

export interface ChangePasswordResponse {
  message: string;
  user: UserData;
}

export interface GetProjectPermissionsResponse {
  message: string;
  permissions: {
    canRemoveProject: boolean;
    canUpdateProject: boolean;
    canCreateAdminMembership: boolean;
    canCreateMembership: boolean;
    canUpdateAdminMembership: boolean;
    canUpdateMembership: boolean;
    canRemoveAdminMembership: boolean;
    canRemoveMembership: boolean;
    canCreateStatus: boolean;
    canUpdateStatus: boolean;
    canRemoveStatus: boolean;
    canCreateStory: boolean;
    canUpdateStory: boolean;
    canRemoveStory: boolean;
    canReadStory: boolean;
  };
}

export interface GetProjectResponse {
  message: string;
  project: ProjectData;
}

export interface RemoveProjectResponse {
  message: string;
  project: ProjectData;
}

export interface UpdateProjectResponse {
  message: string;
  project: ProjectData;
}
