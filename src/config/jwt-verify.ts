

interface GetValidateTokenProps {
  token?:string;
  payload?:string;
  isValidToken:boolean;
}


export class JwtVerifyAdapter {

  private readonly name:string;

  constructor(
    name:string = 'jwt-devcompletestudios',
  ){
    this.name = name;
  }


  saveToken( token:string ){
    localStorage.setItem(this.name, token);
  };

  getValidateToken() {
    const token = localStorage.getItem(this.name);

    // TODO: hacemos una peticion HTTP para validar el jwt

    return token;
  }

}