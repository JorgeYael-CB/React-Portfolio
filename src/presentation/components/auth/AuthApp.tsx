import { useContext, useState } from "react";
import { AuthContext } from "../../providers/auth/AuthProvider";
import { GenericModal } from "../modal/GenericModal";
import { LoadingApp } from "../loadings/LoadingApp";
import { ModalInputText } from "../modal/ModalInputTextApp";
import { ModalNumberInput } from "../modal/ModalNumberInput";
import { EnterVerifyDataUseCase } from "../../../core/use-cases";
import { verifyUserEmailUseCase } from "../../../core/use-cases/verify-user-email.useCase";


interface Props {
  succesLogin:(bool: boolean, token:string) => void;
}


export const AuthApp = ( { succesLogin }: Props ) => {
  const { login } = useContext( AuthContext );

  const [isOpenCodeModal, setIsOpenCodeModal] = useState<boolean>(false);
  const [isOpenUserModal, setIsOpenUserModal] = useState<boolean>(true);
  const [codeVerify, setCodeVerify] = useState<number>(123456);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const [messageErrorUserData, setMessageErrorUserData] = useState('');
  const [errorUserData, setErrorUserData] = useState(false);

  const [messageErrorCodeVerify, setMessageErrorCodeVerify] = useState('');
  const [errorCodeVerify, setErrorCodeVerify] = useState(false);

  const [bearerToken, setBearerToken] = useState<string>();



  const onCloseCodeModal = () => {
    setIsOpenCodeModal(false);
  }

  const onCloseUserModal = () => {
    setIsOpenUserModal( false );
  };

  const onCodeSubmitCodeModal = async( code:number ) => {
    // TODO: verificamos el código que ingreso
    if( code !== codeVerify ){
      setErrorCodeVerify( true )
      setMessageErrorCodeVerify('The code does not match');
      return;
    }

    setIsLoading(true);

    // TODO: verificamos su cuenta
    const res = await verifyUserEmailUseCase({email: userEmail, token: bearerToken!});

    if( res.error ){
      setErrorCodeVerify( true );
      setMessageErrorCodeVerify( res.messageError! );
      setIsLoading(false);
      return;
    };

    setErrorCodeVerify( false );
    setIsOpenCodeModal(false);

    // TODO: iniciamos sesión del usuario
    await login(bearerToken!);

    succesLogin(true, bearerToken!);
    setIsLoading(false);
  };


  const onSubmitUserModal = ( name:string, email:string ) => {
    setIsLoading( true );
    setUserEmail(email);
    setUserName(name);

    EnterVerifyDataUseCase({name, email})
      .then( data => {
        if( data.error ){
          setErrorUserData( data.error );
          setMessageErrorUserData( data.messageError! );
          setIsLoading( false );
          return;
        }

        setErrorUserData( data.error );
        setMessageErrorUserData('');
        setBearerToken( data.token );

        setCodeVerify( Number(data.codeVerify!) );
        setIsOpenUserModal( false );
        setIsOpenCodeModal( true );
        setIsLoading( false );
      })
  };


  return (
    <>
      {
        !isLoading
        ?
        <>
        {
          <>
            <ModalNumberInput
              isOpen={ isOpenCodeModal }
              onClose={ onCloseCodeModal }
              onCodeSubmit={ onCodeSubmitCodeModal }
              text="A verification code has been sent to your email to verify your account."
              customError={ {messageError: messageErrorCodeVerify, infoAlert:true, show: errorCodeVerify} }
            />

            <ModalInputText
              isOpen={ isOpenUserModal }
              onClose={ onCloseUserModal }
              onSubmit={ onSubmitUserModal }
              textInitialValue={ userEmail }
              titleInitialValue={ userName }
              titleTex="Name"
              titleTitle="Email"
              text="Please enter your details to be able to add comments."
              title="DevComplete Studios"
              typeTextModal="text"
              typeTitleModal="email"
              customError={{ messageError:messageErrorUserData, show:errorUserData, errorAlert:true }}
            />
          </>
        }
        </>
        : <GenericModal children={ <LoadingApp/>}/>
      }
    </>
  )
}

