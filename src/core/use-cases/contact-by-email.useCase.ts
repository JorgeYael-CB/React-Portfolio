import { envs } from "../../config";
import { ContactData, ResponseApiInterface } from "../../interfaces";


export class ContactByEmailUsecase {

    constructor(){};


    async byEmail( userData:ContactData ):Promise<ResponseApiInterface> {
        const res = await fetch(`${envs.API_URL}/contact/by-email`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify( userData ),
        });

        const data = await res.json();

        return {
            error: data.error,
            messageError: data.messageError,
            messageSucces: data.messageSucces,
            succes: data.succes,
        };
    };

}
