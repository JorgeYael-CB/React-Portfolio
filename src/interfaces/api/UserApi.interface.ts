import { roles } from "./RolesApi.type";


export interface UserApiInterface {
  _id: string,
  email: string,
  name: string,
  verify: boolean,
  isActive: boolean,
  date: Date,
  roles: roles[]
}