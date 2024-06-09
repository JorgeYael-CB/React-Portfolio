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
    <div className="max-w-2xl mx-auto my-4 p-6 bg-white rounded-xl shadow-md flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-lg font-medium text-gray-800">{user.name}</p>
          <p className="text-sm text-gray-600">{formattedDate}</p>
        </div>
        <span className={`text-sm font-medium ${user.verify ? 'text-green-500' : 'text-red-500'}`}>
          {user.verify ? 'Usuario Verificado' : 'Usuario No Verificado'}
        </span>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 whitespace-pre-line">{question}</p>
      </div>
      <div className="flex justify-end space-x-3">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Add Answer
        </button>
        <button onClick={onShowAnswers} disabled={allAnswersCount <= 0} className="disabled:opacity-60 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          {`${ showAnswers ? 'Hide' : 'Show' } +${allAnswersCount} Answers`}
        </button>
      </div>
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
