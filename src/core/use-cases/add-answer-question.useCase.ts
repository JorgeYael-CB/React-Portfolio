import { envs } from "../../config";
import { AddAnswerApiInterface } from "../../interfaces/api/AddAnswerApi.interface";


interface Props {
  urlApi?:string;
  token:string;
  questionId:string;
  answer:string;
}


export const addAnswerToQuestionUseCase = async( { questionId, token, urlApi = '/answers/add-answer', answer }:Props ):Promise<AddAnswerApiInterface> => {
  const url = `${envs.API_URL}${urlApi}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify( {answer, questionId} )
  });

  return await res.json();
};
