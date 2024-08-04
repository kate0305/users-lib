export enum Paths {
  HOME = '/',
  USERS = 'users',
  CREATE_USER = 'new-user',
  NOT_FOUND = '*',
}

export type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  gender: string;
  residence: string;
  photo: string | null;
};

export type UserListResp = {
  users: UserData[];
  totalUsers: number;
};

export type CreateUserReq = Omit<UserData, 'id'>;

export type UpdateUserReq = Partial<UserData>;

export type UploadAvatarReq = Partial<UserData>;

export type UploadAvatarResp = {
  data: {
    display_url: string;
  };
};
