import { FormEvent, useContext, useState } from "react";
import { addQuestionUseCase } from "../../../core/use-cases";
import { AuthContext } from "../../providers/auth/AuthProvider";
import { AuthApp } from "../auth/AuthApp";
import { AlertApp } from "../messages/AlertApp";



interface Props {
  addQuestionCallback: ( addQuestion:boolean ) => void;
}


export const AddQuestionApp = ( { addQuestionCallback }: Props ) => {
  const { isLogged, token } = useContext(AuthContext);

  const [titleQuestion, setTitleQuestion] = useState<string>('');
  const [questionText, setQuestionText] = useState<string>('');
  const [errorQuestion, setErrorQuestion] = useState(false);
  const [errorMessageQuestion, setErrorMessageQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [startLogin, setStartLogin] = useState(false);

  const [rating, setRating] = useState<number>(0);


  const onSubmitModalQuestion = async ( bearerToken?:string ) => {
    setIsLoading(true);

    const res = await addQuestionUseCase({ question: { question:questionText, title: titleQuestion, stars:rating > 0 ? rating: 4 }, token: bearerToken ? bearerToken: token });

    if (res.error) {
      setErrorQuestion(true);
      setErrorMessageQuestion(res.messageError!);
      setIsLoading(false);
      return;
    }

    setErrorQuestion(false);
    setQuestionText('');
    setTitleQuestion('');
    setRating(0);
    addQuestionCallback( true );
    setIsLoading(false);
  };

  const onSubmit = async( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    if ( !isLogged ) {
      setStartLogin(true);
      return;
    }

    await onSubmitModalQuestion();
  };

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <>
      {startLogin && <AuthApp callbackCloseUserModal={ () => setStartLogin(false) } callbackCloseCodeModal={ () => setStartLogin(false) } succesLogin={ (_, bearerToken) => onSubmitModalQuestion( bearerToken ) } />}

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h3 className="text-center text-2xl font-semibold text-gray-700 mb-6">Add a Review or Question</h3>

        <form className="space-y-6 aria-disabled:opacity-50" onSubmit={ onSubmit } aria-disabled={ isLoading }>
          <div className="relative">
            <input
              type="text"
              value={ titleQuestion }
              onChange={(e) => setTitleQuestion(e.target.value)}
              placeholder="Title"
              className="peer h-12 w-full border border-gray-300 rounded-lg px-4 text-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition placeholder-transparent"
            />
            <label className="absolute left-4 top-2 text-gray-400 text-sm transform -translate-y-3 scale-75 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-500">
              Title
            </label>
          </div>

          <div className="relative">
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Your message"
              className="peer h-32 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition placeholder-transparent resize-none"
            ></textarea>
            <label className="absolute left-4 top-2 text-gray-400 text-sm transform -translate-y-3 scale-75 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-500">
              Your comment
            </label>
          </div>

          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                onClick={() => handleStarClick(index)}
                className={`w-8 h-8 ms-3 cursor-pointer ${index < rating ? 'text-yellow-300' : 'text-gray-300'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <span className="ml-4 text-gray-700">{rating} / 5</span>
          </div>

          {
            errorQuestion
            &&
            <AlertApp message={errorMessageQuestion} errorAlert/>
          }

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
