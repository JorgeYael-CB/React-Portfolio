import { AnswerApiInterface } from "../../../interfaces/api/AnswerApi.interface";
import { AddLikeApp } from "./AddLikeApp";


interface Props {
  answerApp: AnswerApiInterface
}



export const AnswerApp = ({ answerApp: { answer, date, user, likes, _id } }: Props) => {
  const formattedDate = new Date(date).toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short" });

  return (
    <div className="bg-white rounded-lg p-4 mt-2 shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="ml-2">
            <p className={`text-sm font-medium text-gray-400`}>{user.name}</p>
            <span className={`text-sm font-medium ${ user.verify ? 'text-green-500': 'text-red-500' }`}>{user.verify ? "Verificado" : "No verificado"}</span>
          </div>
        </div>
        <span className={`text-xs font-medium ${user.roles.includes('ADMIN') ? "text-blue-500" : "text-green-500"}`}>
          { user.roles.includes('ADMIN') ? "Admin" : "Usuario" }
        </span>
      </div>
      <p className="text-gray-600 font-medium mt-2">{answer}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm font-medium text-gray-400">{ formattedDate }</p>

        <AddLikeApp answerId={_id} urlApiAddLike='/answers/add-like' urlApiRemoveLike='/answers/remove-like' likes={ likes } />

      </div>
    </div>
  );
};
