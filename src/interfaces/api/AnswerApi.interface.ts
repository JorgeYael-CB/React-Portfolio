

export interface AnswerApiInterface {
  _id: string,
  answer:string;
  date: Date,
  user: string,
  question: string;

  // id:string;
  //       answer:string;
  //       date: Date,
  //       user: {
  //           _id:string;
  //           email:string;
  //           name:string;
  //           verify: boolean,
  //           isActive: boolean,
  //           date: Date,
  //           roles: []
  //       },
  //       question: {
  //           _id: string,
  //           title: string,
  //           question: string;
  //           date: Date,
  //           user: {
  //               _id: string,
  //               email: string,
  //               name: string,
  //               verify: boolean,
  //               isActive: boolean,
  //               date: Date,
  //               roles: []
  //           }
  //       }

}
