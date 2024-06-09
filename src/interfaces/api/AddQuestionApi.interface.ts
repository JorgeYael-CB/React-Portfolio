type roles = 'ADMIN' | 'DEVELOPER' | 'USER' | 'SUPER_USER';


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
      user: {
          _id: string,
          email: string,
          name: string,
          verify: boolean,
          isActive: boolean,
          date: Date,
          roles: roles[]
      },
      answers: []
  }

}
