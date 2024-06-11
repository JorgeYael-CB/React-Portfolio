import { UserApiInterface } from "./UserApi.interface"


export interface AddQuestionApiInterface {

  succes: boolean,
  error: boolean,
  messageSucces?: string
  messageError?: string
  newQuestion?: {
    title: string,
    id: string,
    question: string,
    date: Date,
    user: UserApiInterface,
    answers: []
    likes: UserApiInterface[],
    stars: number,
    edited: boolean,
  }

}
