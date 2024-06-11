import { QuestionApiInterface } from "./QuestionApi.interface";
import { roles } from "./RolesApi.type";


export interface ValidateJwtInterface {

  error:boolean;
  messageError?:string;

  user?: {
    email: string;
    id: string;
    verify: boolean;
    isActive: boolean;
    date: Date;
    roles: roles[];
    questions: QuestionApiInterface[];
    name: string;
    img?:string;
  };
  isValidToken: boolean;
  succes: boolean;
  message?: string;
}
