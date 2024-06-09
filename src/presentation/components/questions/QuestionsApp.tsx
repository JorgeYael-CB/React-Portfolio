import { useEffect, useState } from "react";
import { GetAllQuestionsApiInterface } from "../../../interfaces";
import { getAllQuestionsUseCase } from "../../../core/use-cases";
import { LoadingApp } from '../loadings/LoadingApp';
import { QuestionApp } from "./QuestionApp";
import { AlertApp } from "../messages/AlertApp";
import { AddQuestionApp } from "./AddQuestionApp";
import { PaginationTemplateApp } from "../../template";



export const QuestionsApp = () => {
  const [loading, setLoading] = useState(true);
  const [limit, _] = useState(5);
  const [page, setPage] = useState(0);
  const [moreRecent, setMoreRecent] = useState(false);

  const [data, setData] = useState<GetAllQuestionsApiInterface>();
  let error, questionsPagination, succes;
  let maxPage, minPage, totelElements;


  useEffect(() => {
    setLoading(true);
    getAllQuestionsUseCase({limit, page, moreRecent})
      .then( dataApi => {
        setData(dataApi);

        setLoading( false );
      })
      .catch( err => console.log(err) );
  }, [limit, page, moreRecent]);


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
    ({ error, questionsPagination, succes } = data);
    ({ maxPage, minPage, totelElements } = questionsPagination);
  };

  return (
    <div className="my-24">
      <h2 className="text-center text-4xl font-semibold text-blue-600 mb-16">Questions and reviews</h2>

      <AddQuestionApp/>

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

    {
      data
      &&
      <div className="flex flex-row-reverse justify-center items-center gap-24">
        <PaginationTemplateApp
          isLoading={loading}
          nextPage={ nextPage }
          prevPage={ prevPage }
          nextPageValidation={ nextPageValidate }
          prevPageValidation={ prevPageValidate }
          config={ {allElementsNumber: totelElements!, currentElements: questionsPagination!.elements.length, currentPage:page} }
        />

        <div className="flex items-center">
          <input onChange={ () => {}} disabled={ loading || questionsPagination!.elements.length <= 1 } checked={ moreRecent } onClick={ () => setMoreRecent( prevValue => !prevValue ) } id="link-radio" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label htmlFor="link-radio" className="ms-2 text-sm font-medium text-gray-900">Sort by most recent</label>
        </div>
      </div>
    }

    </div>
  )
};
