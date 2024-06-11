import { QuestionApiInterface } from "./QuestionApi.interface";


export interface AddLikeQuestionApiInterface {

  error: boolean,
  succes: boolean,
  messageSucces?: string,
  question?: QuestionApiInterface,
  likes?: number;
}