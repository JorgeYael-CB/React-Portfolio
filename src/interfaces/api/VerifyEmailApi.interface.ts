import { QuestionApiInterface } from './QuestionApi.interface';
import { roles } from './RolesApi.type';



export interface VerifyEmailApiInterface {
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
  },
  error: boolean;
  succes: boolean;
  messageError?:string;
  messageSucces?:string;
  token?:string;

}