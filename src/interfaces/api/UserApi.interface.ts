
type roles = 'USER' | 'ADMIN' | 'SUPER_USER' | 'DEVELOPER';

export interface UserApiInterface {
  _id: string,
  email: string,
  name: string,
  verify: boolean,
  isActive: boolean,
  date: Date,
  roles: roles[]
}