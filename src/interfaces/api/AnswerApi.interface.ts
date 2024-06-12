import { QuestionApiInterface } from "./QuestionApi.interface";
import { UserApiInterface } from "./UserApi.interface";


export interface AnswerApiInterface {
  _id: string,
  answer:string;
  date: Date,
  user: UserApiInterface,
  question: QuestionApiInterface;
  likes: UserApiInterface[];

}
