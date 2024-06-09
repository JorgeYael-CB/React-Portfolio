import { QuestionApiInterface } from "../../../interfaces";

export const QuestionApp = ({ date, question, title, user }: QuestionApiInterface) => {
  const formattedDate = new Date(date).toLocaleDateString('es-MX');

  return (
    <div className="max-w-2xl mx-auto my-4 p-6 bg-black rounded-xl shadow-md flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-lg font-medium text-white">{user.name}</p>
          <p className="text-sm text-gray-200">{formattedDate}</p>
        </div>
        <span className={`text-sm font-medium ${user.verify ? 'text-green-500' : 'text-red-500'}`}>
          {user.verify ? 'User Verify' : 'User Not Verify'}
        </span>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-300 whitespace-pre-line">{question}</p>
      </div>
      <div className="flex justify-end space-x-3">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Add answer
        </button>
        <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          View answers
        </button>
      </div>
    </div>
  );
};
