export interface UserModel {
  id: string;
  created: Date;
  lastModified: Date;
  version: number;
  address: string;
  username: string;
  avatar: string | null;
}

export type ProfileModel = {
  bio: string;
  playerId: string;
  email: string;
} & UserModel;

export interface BasicUserDto {
  address: string;
  username: string;
  avatar: string | null;
}
