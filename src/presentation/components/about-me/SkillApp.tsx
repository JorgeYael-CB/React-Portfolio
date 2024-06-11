export const SkillApp = ({ skill }: { skill: string }) => {
  return (
    <div className="group p-4 shadow-md bg-white rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center gap-4">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
        <img
          src={`/icons/${skill}.svg`}
          alt={`${skill} icon`}
          className="w-12 h-12"
        />
      </div>
      <p className="text-center font-semibold text-sm group-hover:text-blue-500 transition-colors duration-300">{skill.toUpperCase()}</p>
    </div>
  );
};
