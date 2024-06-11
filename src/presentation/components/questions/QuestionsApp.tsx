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
  const [moreRecent, setMoreRecent] = useState(true);
  const [addQuestionBool, setAddQuestionBool] = useState(false);

  const [data, setData] = useState<GetAllQuestionsApiInterface>();
  let error, questionsPagination, succes;
  let maxPage, minPage, allElementsCount;


  useEffect(() => {
    setLoading(true);
    getAllQuestionsUseCase({limit, page, moreRecent})
      .then( dataApi => {
        setData(dataApi);

        setLoading( false );
      })
      .catch( err => console.log(err) );
  }, [limit, page, moreRecent, addQuestionBool]);


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
    ({ maxPage, minPage, allElementsCount } = questionsPagination!);
  };

  return (
    <div className="md:my-56 my-44 bg-white py-12 shadow-md rounded-md" id="questions">
      <h2 className="text-center text-4xl font-semibold text-blue-600 mb-8">Questions and reviews</h2>

      <AddQuestionApp addQuestionCallback={ (bool) => setAddQuestionBool(bool) }/>

      <div className="mt-16 max-w-4xl mx-auto">
        {
          loading
          ?
          <LoadingApp/>
          : (!error && succes)
            &&
            questionsPagination!.elements.length > 0
            ?
            questionsPagination!.elements.map( question => (
              <QuestionApp key={question.id} {...question}/>
            ))
            : <AlertApp message="There are currently no questions" infoAlert/>
        }
      </div>

      {
        data
        &&
        <PaginationTemplateApp
          isLoading={loading}
          nextPage={ nextPage }
          prevPage={ prevPage }
          nextPageValidation={ nextPageValidate }
          prevPageValidation={ prevPageValidate }
          config={ {allElementsNumber: allElementsCount!, currentElements: questionsPagination!.elements.length, currentPage:page} }
        />
      }

    </div>
  )
};
