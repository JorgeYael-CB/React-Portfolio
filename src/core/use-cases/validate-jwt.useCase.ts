import { envs } from "../../config";
import { ValidateJwtInterface } from "../../interfaces";


export const validateJwtUseCase = async( token:string, urlApi = '/users/verify-jwt' ):Promise< ValidateJwtInterface > => {
  const url = `${envs.API_URL}${urlApi}`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });

  const data = await res.json();

  return data;
};
