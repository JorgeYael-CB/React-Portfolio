import { useContext, useEffect, useState } from "react";
import { addLikeQuestionUseCase, removeLikeQuestionUseCase } from "../../../core/use-cases";
import { AuthContext } from "../../providers/auth/AuthProvider";
import { UserApiInterface } from "../../../interfaces";
import { AuthApp } from "../auth/AuthApp";



interface Props {
  questionId?: string;
  answerId?: string;
  likes: UserApiInterface[];
  urlApiAddLike: string;
  urlApiRemoveLike: string;
  onEventLike?: ( like:boolean ) => void;
}


export const AddLikeApp = ( { questionId , likes, onEventLike, urlApiAddLike, urlApiRemoveLike, answerId}: Props ) => {
  const [likesCount, setLikesCount] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [starAuth, setStarAuth] = useState(false);
  const [isLoadingLike, setIsLoadingLike] = useState(false);


  const { email, isLogged, token } = useContext( AuthContext );


  useEffect(() => {
    if (isLogged && email) {
      const liked = likes.some((likeUser) => likeUser.email === email);
      setIsLiked(liked);
    }
  }, [likes, email, isLogged]);


  const onLike = (bearerToken: string) => {
    if (isLoadingLike) return;
    setIsLoadingLike(true);

    if (isLiked) {
      setLikesCount(likesCount - 1);
      setIsLiked(false);
      removeLikeQuestionUseCase({
        urlApi: urlApiRemoveLike,
        questionId,
        answerId,
        token: bearerToken ? bearerToken : token,
      })
        .then(() => {
          setIsLoadingLike(false)
          onEventLike && onEventLike( true );
        })
        .catch(() => {
          alert("Error! - Contact support");
          setIsLoadingLike(false);
        });

    } else {
      setLikesCount(likesCount + 1);
      setIsLiked(true);
      addLikeQuestionUseCase({
        urlApi: urlApiAddLike,
        questionId,
        answerId,
        token: bearerToken ? bearerToken : token,
      })
        .then(() => {
          setIsLoadingLike(false)
          onEventLike && onEventLike(false);
        })
        .catch(() => {
          alert("Error! - Contact support");
          setIsLoadingLike(false);
        });
    }
  };

  const onClick = () => {
    if (!isLogged) {
      setStarAuth(true);
      return;
    }
    onLike(token);
  };


  return (
    <>
      {
        starAuth && <AuthApp succesLogin={ (_, bearerToken) => onLike( bearerToken ) }/>
      }

      <div className="flex gap-2">
        <button
          onClick={ onClick }
          className={`like-button ${isLiked ? "animate__animated animate__heartBeat" : ""}`}
        >
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
    </>
  )
}
