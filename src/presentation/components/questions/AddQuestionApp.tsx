import { EnterVerifyDataUseCase, addQuestionUseCase } from "../../../core/use-cases";
import { verifyUserEmailUseCase } from "../../../core/use-cases/verify-user-email.useCase";
import { AuthContext } from "../../providers/auth/AuthProvider";
import { LoadingApp } from "../loadings/LoadingApp";
import { GenericModal } from "../modal/GenericModal";
import { ModalInputText } from "../modal/ModalInputTextApp";
import { ModalNumberInput } from "../modal/ModalNumberInput";
import { useContext, useState } from 'react';




export const AddQuestionApp = () => {
  const { isLogged, login, token } = useContext( AuthContext );

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

  const [bearerToken, setBearerToken] = useState<string>();

  const [showModalQuestion, setShowModalQuestion] = useState(false);
  const [titleQuestion, setTitleQuestion] = useState<string>();
  const [questionText, setQuestionText] = useState<string>();
  const [errorQuestion, setErrorQuestion] = useState(false);
  const [errorMessageQuestion, setErrorMessageQuestion] = useState<string>();





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

    setShowModalQuestion(true);

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

  const onClick = () => {
    if( isLogged ){
      // TODO: mostramos el modal si esta verificado
      setShowModalQuestion(true);
      return;
    }

    setIsOpenUserModal( true );
  };



  const onSubmitModalQuestion = async( titleQuestion:string, question:string ) => {
    setQuestionText( question );
    setTitleQuestion( titleQuestion )
    setIsLoading(true);

    // TODO: hacer la peticiom HTTP
    const res = await addQuestionUseCase({question: {question: question, title: titleQuestion}, token});

    if( res.error ){
      setErrorQuestion(true);
      setErrorMessageQuestion(res.messageError);
      setIsLoading(false);
      return;
    }

    setErrorQuestion(false);
    setShowModalQuestion(false);
    setQuestionText('');
    setTitleQuestion('')
    setIsLoading(false);
  }



  return (
    <div>

      {
        (showModalQuestion && !isLoading)
        &&
        <ModalInputText
          isOpen={showModalQuestion}
          onClose={ () => setShowModalQuestion(false) }
          onSubmit={ onSubmitModalQuestion }
          textInitialValue={ questionText }
          titleInitialValue={ titleQuestion }
          titleTitle="Question"
          titleTex="title"
          text="Please enter your question or review details and it will be answered as soon as possible."
          title="DevComplete Studios"
          typeTextModal="text"
          typeTitleModal="Textarea"
          customError={ {messageError: errorMessageQuestion!, show:errorQuestion, errorAlert:true  } }
        />
      }

      {
        !isLoading
        ?
        <>
        {
          !showModalQuestion
          &&
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

      <p className="text-center mt-2 mb-8 font-normal">
        In this section you can see the questions and reviews, if you require it you can add them by
        <a
          onClick={ onClick }
          className="underline text-blue-600 hover:cursor-pointer font-semibold"> Clicking on this link</a>.
      </p>
    </div>
  )
}
