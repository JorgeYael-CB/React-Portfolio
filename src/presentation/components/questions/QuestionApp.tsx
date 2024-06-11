import { useContext, useState, useEffect } from "react";
import { QuestionApiInterface } from "../../../interfaces";
import { AnswerApp } from "./AnswerApp"; // Asegúrate de importar tu componente de respuestas
import { AuthContext } from "../../providers/auth/AuthProvider";
import { AuthApp } from "../auth/AuthApp";

export const QuestionApp = ({ date, question, title, user, answers, likes, stars }: QuestionApiInterface) => {
  const { isLogged, email, token } = useContext(AuthContext);
  const formattedDate = new Date(date).toLocaleDateString('es-MX');
  const allAnswersCount = answers.length;
  const [showAnswers, setShowAnswers] = useState(false);
  const [likesCount, setLikesCount] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [starAuth, setStarAuth] = useState(false);
  const [isLoadingLike, setIsLoadingLike] = useState(false);



  useEffect(() => {
    if (isLogged && email) {
      const liked = likes.some(likeUser => likeUser.email === email);
      setIsLiked(liked);
    }
  }, [likes, email, isLogged]);

  const onShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const onLike = ( token:string ) => {
    if( isLoadingLike ) return;
    setIsLoadingLike(true);

    if ( isLiked ) {
      setLikesCount(likesCount - 1);
      setIsLiked(false);
      // TODO: api
    } else {
      setLikesCount(likesCount + 1);
      setIsLiked(true);
      //TODO: api
    }
  };

  const onClick = () => {
    if( !isLogged ){
      setStarAuth( true );
      return;
    }

    onLike( token )
  }



  return (
    <>

      {
        starAuth
        &&
        <AuthApp succesLogin={ ( _, bearerToken ) => onLike(bearerToken) }/>
      }

      <div className="max-w-2xl mx-auto my-2 mb-6 p-2 px-6 flex flex-col">
        <div className="flex justify-between items-center md:mb-0 mb-2">
          <div>
            <p className="md:text-lg text-sm font-medium text-gray-500">{user.name}</p>
          </div>
          <span className={`md:text-sm text-xs font-medium ${user.verify ? 'text-green-500' : 'text-red-500'}`}>
            {user.verify ? 'Usuario Verificado' : 'Usuario No Verificado'}
          </span>
        </div>

        <div>
          <h2 className="md:text-2xl text-lg font-semibold text-gray-900 md:mb-2 mb-1">{title}</h2>

          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 my-2 ms-1 ${index < stars ? 'text-yellow-300' : 'text-gray-300'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-700 whitespace-pre-line">{ question }</p>

          <div className="flex flex-row justify-between items-center my-2">
            <p className="text-sm text-black opacity-50 font-medium mt-4">{formattedDate}</p>

            <div className="flex gap-2">
              <button onClick={ onClick } className={`like-button ${isLiked ? 'animate__animated animate__heartBeat' : ''}`}>
                {isLiked ? (
                  <svg
                    className="w-5 h-5 text-red-500 border-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      stroke="black"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-white border-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      stroke="black"
                    />
                  </svg>
                )}
              </button>
              <p className="text-sm font-medium text-gray-400">{ likesCount }</p>
            </div>
          </div>
        </div>

        {
          answers.length > 0
          &&
          <a onClick={onShowAnswers} className="text-gray-400 my-4 text-sm font-medium text-left hover:cursor-pointer">
            --- {`${ showAnswers ? 'Hide' : 'Show' } ${allAnswersCount} ${allAnswersCount > 1 ? 'Answers': 'Answer'}`}
          </a>
        }

        {showAnswers && (
          <div className="mt-4">
            {answers.map((answer, index) => (
              <AnswerApp key={index} answerApp={answer} />
            ))}
          </div>
        )}

        <hr />
      </div>
    </>
  );
};
