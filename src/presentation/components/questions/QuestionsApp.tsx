import { useEffect, useState } from "react";
import { GetAllQuestionsApiInterface } from "../../../interfaces";
import { getAllQuestionsUseCase } from "../../../core/use-cases";
import { LoadingApp } from '../loadings/LoadingApp';
import { QuestionApp } from "./QuestionApp";
import { AlertApp } from "../messages/AlertApp";
import { AdddQuestionApp } from "./AdddQuestionApp";



export const QuestionsApp = () => {
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);

  const [data, setData] = useState<GetAllQuestionsApiInterface>();
  let error, messageSucces, questionsPagination, succes;
  let maxPage, minPage, totelElements;


  useEffect(() => {
    setLoading(true);
    getAllQuestionsUseCase({limit, page})
      .then( dataApi => {
        setData(dataApi);

        setLoading( false );
      })
      .catch( err => console.log(err) );
  }, [limit, page]);


  const nextPageValidate = ():boolean => {
    return page >= maxPage!;
  };

  const prevPageValidate = ():boolean => {
    return page <= minPage!;
  };

  const nextPage = () => {
    if( !nextPageValidate() ){
      setPage( prevValue => prevValue += 1 );
    }
  };

  const prevPage = () => {
    if( !prevPageValidate() ){
      setPage( prevValue => prevValue -= 1 );
    }
  };


  if (data) {
    ({ error, messageSucces, questionsPagination, succes } = data);
    ({ maxPage, minPage, totelElements } = questionsPagination);
  };

  return (
    <div className="my-24">
      <h2 className="text-center text-4xl font-semibold text-blue-600 mb-16">Questions and reviews</h2>

      {
        loading
        ?
        <LoadingApp/>
        : (!error && succes)
          &&
          questionsPagination!.elements.length > 0
          ?
          questionsPagination!.elements.map( question => (
            <QuestionApp key={question.id} answers={question.answers} date={question.date} id={question.id} question={question.question} title={question.title} user={question.user}/>
          ))
          : <AlertApp message="There are currently no questions" infoAlert/>
      }

    <AdddQuestionApp/>

    {
      data
      &&
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900"> {page + 1} </span> to <span className="font-semibold text-gray-900">{ questionsPagination!.elements.length }</span> of <span className="font-semibold text-gray-900">{ totelElements }</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={ prevPage }
            disabled = { prevPageValidate() || loading }
            className="disabled:opacity-60 flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
              <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
              Prev
          </button>
          <button
            onClick={ nextPage }
            disabled = { nextPageValidate() || loading }
            className="disabled:opacity-60 flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
              Next
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
      </div>
    }

    </div>
  )
};
