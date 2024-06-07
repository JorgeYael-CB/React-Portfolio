import { QuestionApiInterface } from './QuestionApi.interface';


type roles = 'USER' | 'ADMIN' | 'DEVELOPER' | 'SUPER_USER';


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
  },
  error: boolean;
  succes: boolean;
  messageError?:string;
  messageSucces?:string;
  token?:string;

}