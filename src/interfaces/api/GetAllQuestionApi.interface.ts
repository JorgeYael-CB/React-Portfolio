import { QuestionApiInterface } from "./QuestionApi.interface"

export interface GetAllQuestionsApiInterface {

  succes: boolean,
  error: boolean,
  questionsPagination: {
    allElementsCount: number,
    elements: QuestionApiInterface[],
    limit: number,
    page: number,
    maxPage: number,
    minPage: number,
  },
  messageSucces:string,
}