import { QuestionApiInterface } from "../../../interfaces";

export const QuestionApp = ({ date, question, title, user }: QuestionApiInterface) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="max-w-2xl my-4 mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-lg font-medium text-gray-700">{user.name}</p>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
        <div className={`text-sm font-medium ${user.verify ? 'text-green-500' : 'text-red-500'}`}>
          {user.verify ? 'Verified User' : 'User Not Verified'}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700">{question}</p>
      </div>
    </div>
  );
};
