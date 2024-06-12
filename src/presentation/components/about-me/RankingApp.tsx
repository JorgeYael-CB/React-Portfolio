import 'animate.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { getAllQuestionsUseCase } from '../../../core/use-cases';



export const RankingApp = () => {
  const [mark, setMark] = useState<number>(4);
  const [allUsers, setAllUsers] = useState<number>(0);


  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  useEffect(() => {
    getAllQuestionsUseCase({limit: 10000000000, moreRecent:true, page: 0})
      .then( data => {
        if( data.error ) return;
        let markPromedio = 0;

        data.questionsPagination!.elements.forEach( question => {
          markPromedio += +question.stars;
          console.log({markPromedio, allUsers});
        });

        setAllUsers( Math.floor( data.questionsPagination!.elements.length ) );
        setMark( markPromedio / allUsers   );
      })
  }, [allUsers, mark])



  return (
    <div ref={ref} className="w-full border border-gray-300 rounded-lg p-8 bg-white shadow-lg mt-20 mb-28 transition duration-500 ease-in-out transform animate__animated animate__fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-5xl font-bold text-indigo-600">
            +
            {inView && <CountUp end={mark} duration={ 4 } decimals={1} decimal="." />}
          </div>
          <p className="text-gray-600">Average Mark</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-indigo-600">
            +
            {inView && <CountUp end={ 10 } duration={ 4 } />}
          </div>
          <p className="text-gray-600">Projects</p>
        </div>
        <div>
          <div className="text-5xl font-bold text-indigo-600">
            +
            {inView && <CountUp end={ allUsers } duration={ 4 } />}
          </div>
          <p className="text-gray-600">Users</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-indigo-600">+1</p>
          <p className="text-gray-600">Experience</p>
        </div>
      </div>
    </div>
  );
};
