import { SkillApp } from "./SkillApp";

export const SkillsApp = () => {
  const skills = ['css-3', 'git', 'github_black', 'html-5', 'js', 'ts', 'lua', 'mongo', 'nest', 'node', 'postgres', 'postman', 'py', 'react', 'sql', 'tailwind'];


  return (
    <div className="mt-16 mb-36">
      <hr/>
      <h3 className="text-left text-green-500 text-2xl font-bold my-4">Skills</h3>

      <div className="flex items-center justify-between">
        { skills.map( skill => (
          <SkillApp key={skill} skill={skill}/>
        ))}
      </div>
    </div>
  )
}
