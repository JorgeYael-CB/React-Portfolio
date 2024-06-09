import { envs } from "../../config";
import { VerifyEmailApiInterface } from "../../interfaces";



interface Props {
  urlApi?:string;
  email?:string;
  token:string;
  id?:string | number;
}


export const verifyUserEmailUseCase = async( { email, id, token, urlApi = '/users/verify-email' }: Props ):Promise< VerifyEmailApiInterface > => {
  const url = `${envs.API_URL}${urlApi}`;
  const data = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify( {email, id} ),
  });

  const res = await data.json();

  return res;
};
