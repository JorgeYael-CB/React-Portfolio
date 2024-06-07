import { envs } from "../../config";
import { AddEmailApiInterface } from "../../interfaces";


interface data {
  name: string;
  email:string;
  urlApi?:string
}



export const EnterVerifyDataUseCase = async( { email, name, urlApi = '/users/add-email' }:data ):Promise<AddEmailApiInterface> => {
  const url = `${envs.API_URL}${urlApi}`;

  const res = await fetch(url, {
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify( {email, name} ),
  })

  const info = await res.json();

  return info
};
