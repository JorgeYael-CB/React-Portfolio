import { useEffect, useState } from "react";
import { GetAllQuestionsApiInterface } from "../../../interfaces";
import { getAllQuestionsUseCase } from "../../../core/use-cases";
import { LoadingApp } from '../loadings/LoadingApp';



export const QuestionsApp = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<GetAllQuestionsApiInterface>();
  let error, messageSucces, questionsPagination, succes;

  useEffect(() => {

    getAllQuestionsUseCase({})
      .then( dataApi => {
        setData(dataApi);

        setLoading( false );
      })
      .catch( err => console.log(err) );

  }, []);

  if (data) {
    ({ error, messageSucces, questionsPagination, succes } = data);
  };

  return (
    <div>
      {
        loading
        ?
        <LoadingApp/>
        :<p>No esta cargando</p>
      }
    </div>
  )
};
