export interface ResponseApiInterface {
  error: boolean;
  succes: boolean;

  messageError:string[] | undefined;
  messageSucces:string[] | undefined;
};