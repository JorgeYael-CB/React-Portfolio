import { envs } from "../../config"
import { AddQuestionApiInterface } from "../../interfaces";



interface Question {
  title:string;
  question:string;
}

interface Props {
  urlApi?:string;
  token:string;
  question: Question,
}


export const addQuestionUseCase = async( { urlApi = '/questions/add-question', token, question } :Props ):Promise< AddQuestionApiInterface > => {
  const url = `${envs.API_URL}${urlApi}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(question),
  });

  const data = await res.json();

  return data;
}
