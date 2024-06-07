import { EnterVerifyDataUseCase } from "../../../core/use-cases";
import { verifyUserEmailUseCase } from "../../../core/use-cases/verify-user-email.useCase";
import { LoadingApp } from "../loadings/LoadingApp";
import { GenericModal } from "../modal/GenericModal";
import { ModalInputText } from "../modal/ModalInputTextApp";
import { ModalNumberInput } from "../modal/ModalNumberInput";
import { useState } from 'react';




export const AddQuestionApp = () => {
  const [isOpenCodeModal, setIsOpenCodeModal] = useState<boolean>(false);
  const [isOpenUserModal, setIsOpenUserModal] = useState<boolean>(false);
  const [codeVerify, setCodeVerify] = useState<number>(123456);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const [messageErrorUserData, setMessageErrorUserData] = useState('');
  const [errorUserData, setErrorUserData] = useState(false);

  const [messageErrorCodeVerify, setMessageErrorCodeVerify] = useState('');
  const [errorCodeVerify, setErrorCodeVerify] = useState(false);


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
    const res = await verifyUserEmailUseCase({email: userEmail});

    if( res.error ){
      setErrorCodeVerify( true );
      setMessageErrorCodeVerify( res.messageError! );
      setIsLoading(false);
      return;
    };


    setErrorCodeVerify( false );
    setIsOpenCodeModal(false);

    // TODO: guardar el token (localstorage o en memoria) y mandar la información del usuario en un estado global para acceder a el desde cualquier lugar

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

        setCodeVerify( Number(data.codeVerify!) );
        setIsOpenUserModal( false );
        setIsOpenCodeModal( true );
        setIsLoading( false );
      })
  };

  const onClick = () => {
    // TODO: mostrar modal para que ingree los datos de su cuenta
    setIsOpenUserModal( true );
  };



  return (
    <div>
      {
        !isLoading
        ?
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
            initialValueEmail={ userEmail }
            initialValueName={ userName }
            customError={{ messageError:messageErrorUserData, show:errorUserData, errorAlert:true }}
          />
        </>
        :
        <GenericModal children={ <LoadingApp/>}/>
      }

      <p className="text-center my-8 font-normal">
        Do you want to add a question or a positive review?
        <a
          onClick={ onClick }
          className="underline text-blue-600 hover:cursor-pointer"> add it here</a>.
      </p>
    </div>
  )
}
