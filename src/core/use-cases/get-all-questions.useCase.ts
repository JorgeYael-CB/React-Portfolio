import { envs } from "../../config";
import { GetAllQuestionsApiInterface } from "../../interfaces";


interface Props {
  url?:string;
  limit?:number;
  page?:number;
};


export const getAllQuestionsUseCase = async ( { limit = 5, page = 0, url = 'questions/all-questions' }: Props ):Promise< GetAllQuestionsApiInterface > => {
  const api = `${envs.API_URL}/${url}?limit=${limit}&page=${page}`;
  const res = await fetch(api);
  const data = await res.json();

  return data;
};
