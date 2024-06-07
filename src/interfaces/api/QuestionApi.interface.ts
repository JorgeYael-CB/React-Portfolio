import { UserApiInterface } from "./UserApi.interface";

export interface QuestionApiInterface {
  title: string;
  id: string;
  _id?: string;
  question: string;
  date: Date,
  user: UserApiInterface,
  answers: [];
}