import { QuestionApiInterface } from "./QuestionApi.interface";
import { UserApiInterface } from "./UserApi.interface";

export interface AddAnswerApiInterface {

  error:boolean;
  succes:boolean;
  messageError?:string


  messageSucces: string,
  answer: {
    id: string,
    answer: string,
    date: Date,
    user: UserApiInterface,
    question: QuestionApiInterface,
    edited: boolean,
    likes: UserApiInterface[];
  }
}