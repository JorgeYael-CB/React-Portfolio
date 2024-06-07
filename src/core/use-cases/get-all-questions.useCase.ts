import { envs } from "../../config";
import { GetAllQuestionsApiInterface } from "../../interfaces";


interface Props {
  url?:string;
  limit?:number;
  page?:number;
  moreRecent?: boolean;
};


export const getAllQuestionsUseCase = async ( { limit = 5, page = 0, moreRecent, url = 'questions/all-questions' }: Props ):Promise< GetAllQuestionsApiInterface > => {
  const api = `${envs.API_URL}/${url}?limit=${limit}&page=${page}${ moreRecent ? '&moreRecent=yes' : '' }`;
  const res = await fetch(api);
  const data = await res.json();

  return data;
};
