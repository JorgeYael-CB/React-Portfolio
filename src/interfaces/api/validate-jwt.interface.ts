

type roles = 'ADMIN' | 'USER' | 'SUPER_USER' | 'DEVELOPER';


export interface ValidateJwtInterface {

  error:boolean;
  messageError?:string;

  user: {
        email:string;
        id:string;
        verify: boolean,
        isActive: boolean,
        date: Date,
        roles: roles[],
        name: string;
    };
    isValidToken: boolean;
    succes: boolean;
    message?: string;

}
