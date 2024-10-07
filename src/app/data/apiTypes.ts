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

interface PaginationData {
  page: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface GetProjectsResponse extends PaginationData {
  message: string;
  projects: ProjectData[];
}
