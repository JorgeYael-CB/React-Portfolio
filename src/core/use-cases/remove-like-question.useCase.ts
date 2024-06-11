import { envs } from "../../config";
import { AddLikeQuestionApiInterface } from "../../interfaces";



interface Props {
  urlApi?:string;
  token:string;
  questionId:string;
}


export const removeLikeQuestionUseCase = async( { questionId, token, urlApi = '/questions/remove-like' }: Props ):Promise< AddLikeQuestionApiInterface > => {
  const url = `${envs.API_URL}${urlApi}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify( { questionId } ),
  });

  return await res.json();
}
