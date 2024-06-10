import { useState } from "react";
import { QuestionApiInterface } from "../../../interfaces";
import { AnswerApp } from "./AnswerApp"; // Asegúrate de importar tu componente de respuestas

export const QuestionApp = ({ date, question, title, user, answers }: QuestionApiInterface) => {
  const formattedDate = new Date(date).toLocaleDateString('es-MX');
  const allAnswersCount = answers.length;
  const [showAnswers, setShowAnswers] = useState(false);

  const onShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <div className="max-w-2xl mx-auto my-2 mb-6 p-2 px-6 flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-medium text-gray-800">{user.name}</p>
        </div>
        <span className={`text-sm font-medium ${user.verify ? 'text-green-500' : 'text-red-500'}`}>
          {user.verify ? 'Usuario Verificado' : 'Usuario No Verificado'}
        </span>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 whitespace-pre-line">{question}</p>

        <p className="text-sm text-black opacity-50 font-medium mt-4">{formattedDate}</p>
      </div>

      {
        answers.length > 0
        &&
        <a onClick={onShowAnswers} className="text-gray-600 text-sm text-center hover:cursor-pointer">
          {`${ showAnswers ? 'Hide' : 'Show' } ${allAnswersCount} ${allAnswersCount > 1 ? 'Answers': 'Answer'}`}
        </a>
      }

      {showAnswers && (
        <div className="mt-4">
          {answers.map((answer, index) => (
            <AnswerApp key={index} answerApp={answer} />
          ))}
        </div>
      )}
    </div>
  );
};
