import { QuestionApiInterface } from "./QuestionApi.interface";
import { UserApiInterface } from "./UserApi.interface";


export interface AnswerApiInterface {
  _id: string,
  answer:string;
  date: Date,
  user: UserApiInterface,
  question: QuestionApiInterface;

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
