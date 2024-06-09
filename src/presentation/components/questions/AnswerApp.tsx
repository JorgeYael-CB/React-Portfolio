import { AnswerApiInterface } from "../../../interfaces/api/AnswerApi.interface";

export const AnswerApp = ({ answerApp }: { answerApp: AnswerApiInterface }) => {
  const { answer, date } = answerApp;
  const formattedDate = new Date(date).toLocaleDateString('es-MX');


  return (
    <div className="bg-gray-100 rounded-lg p-4 mt-2 shadow-inner">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-sm font-medium text-gray-800">{'DevComplete Studios'}</p>
          <p className="text-xs text-gray-600">{formattedDate}</p>
        </div>
        <span className={`text-xs font-medium text-blue-500`}>
          Admin
        </span>
      </div>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};
