export type UserID = number;

export type UserGender = 'male' | 'female' | 'unknown';

export enum UserStatus {
  Active = 'active',
  Suspended = 'suspended',
  Banned = 'banned',
}

export type Role = {
  id: number;
  name: string;
  description: string;
  is_default: boolean;
  status: 'active' | 'non-active';
};

export interface IUser {
  id: UserID;
  email?: string;
  mobile?: string;
  is_admin: boolean;
  username: string | null;
  nickname: string | null;
  gender: UserGender | null;
  full_name: string;
  photo_profile: string | null;
  role: Pick<Role, 'id' | 'name'>;
  roles?: Role[];
  status?: UserStatus;
}
