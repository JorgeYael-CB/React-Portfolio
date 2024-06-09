import { QuestionApiInterface } from "./QuestionApi.interface";


type roles = 'USER' | 'ADMIN' | 'DEVELOPER' | 'SUPER_USER';


export interface AddEmailApiInterface {

  user?: {
      email: string,
      id: string | number,
      verify: boolean,
      isActive: boolean,
      date: Date,
      roles: roles[]
      questions: QuestionApiInterface[],
      name: string
  },

  codeVerify?: number,
  codeRange?: number,
  error: boolean;
  succes: boolean;
  messageSucces?:string;
  messageError?:string;
  token?:string;

}