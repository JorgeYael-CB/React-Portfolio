import { AnswerApiInterface } from "./AnswerApi.interface";
import { UserApiInterface } from "./UserApi.interface";

export interface QuestionApiInterface {
  title: string;
  _id?: string;
  id?: string;
  question: string;
  date: Date,
  user: UserApiInterface,
  answers: AnswerApiInterface[];
  likes:UserApiInterface[];
  stars:number;
  edited: boolean;
}