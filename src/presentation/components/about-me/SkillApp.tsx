
export const SkillApp = ( {skill}: {skill:string} ) => {
  return (
    <>
      <div className="p-4 shadow-sm bg-white rounded-md hover:border hover:border-green-400 hover:cursor-pointer transition-all flex flex-col gap-2">
        <img
          src={`/icons/${skill}.svg`}
          alt={`${skill} Skill Icon`}
          className="w-16 p-1"
        />
        <p className="text-center font-medium text-xs">{skill.toUpperCase()}</p>
      </div>
    </>
  )
}
