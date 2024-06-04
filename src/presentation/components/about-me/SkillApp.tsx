
export const SkillApp = ( {skill}: {skill:string} ) => {
  return (
    <>
      <img
        src={`/icons/${skill}.svg`}
        alt={`${skill} Skill Icon`}
        className="w-16 hover:border hover:border-green-400 hover:cursor-pointer transition-all rounded-md p-1"
      />
    </>
  )
}
