import { useContext, useState } from "react";
import { addAnswerToQuestionUseCase } from "../../../core/use-cases";
import { AuthContext } from '../../providers/auth/AuthProvider';
import { AlertApp } from "../messages/AlertApp";
import { AuthApp } from "../auth/AuthApp";


interface Props {
  questionId: string;
  addAnswerCallback: ( newAnswer: any ) => void;
  closeAddAnswerCallback: ( close: boolean ) => void;
}


export const AddAnswerToQuestionApp = ( { questionId, addAnswerCallback, closeAddAnswerCallback }: Props ) => {
  const { isLogged, token } = useContext( AuthContext );
  const [answer, setAnswer] = useState<string>("");
  const [starAuthAnswer, setStarAuthAnswer] = useState(false);

  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);
  const [errorAnswer, setErrorAnswer] = useState<boolean>(false);
  const [errorAnswerMessage, setErrorAnswerMessage] = useState<string>("");


  const onSendAnswer = (bearerToken?: string) => {
    setIsLoadingAnswer(true);

    addAnswerToQuestionUseCase({
      answer,
      questionId,
      token: bearerToken ? bearerToken : token,
    })
      .then((data) => {
        if (data.error) {
          setErrorAnswer(true);
          setErrorAnswerMessage(data.messageError!);
          setIsLoadingAnswer(false);
          return;
        }

        setErrorAnswer(false);
        setIsLoadingAnswer(false);
        setAnswer("");
        addAnswerCallback( data.answer );
      })
      .catch((err) => console.log(err));
  };

  const sendAnswer = () => {
    if (!answer || answer.trim().length <= 0) return;
    if (!isLogged) {
      setStarAuthAnswer(true);
      return;
    }

    onSendAnswer();
  };


  return (
    <>
      {
        starAuthAnswer
        &&
        <AuthApp succesLogin={ (_, bearerToken) => onSendAnswer(bearerToken) }/>
      }
      <div className="flex flex-col">
        <div>
          <input
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
            type="text"
            placeholder="Write your answer:"
            className="animate__animated animate__fadeIn px-2 font-medium text-gray-600 py-1 mt-4 text-base mb-2 w-full focus:outline-none border-b-2 border-black"
          />
        </div>
        <div className="flex justify-end gap-3 mb-2">
          <button
            onClick={sendAnswer}
            disabled={isLoadingAnswer || answer.length <= 0}
            className="disabled:opacity-50 px-4 py-1 rounded-md hover:cursor-pointer text-white bg-indigo-600"
          >
            Send
          </button>
          <button
            disabled={isLoadingAnswer}
            onClick={ () => closeAddAnswerCallback(true) }
            className="disabled:opacity-50 px-4 py-1 rounded-md hover:cursor-pointer text-white bg-black"
          >
            Cancel
          </button>
        </div>
        {errorAnswer && <AlertApp message={errorAnswerMessage} errorAlert />}
      </div>
    </>
  )
}
