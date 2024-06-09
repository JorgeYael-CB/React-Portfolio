import { SkillApp } from "./SkillApp";

export const SkillsApp = () => {
  const skills = ['css-3', 'git', 'github_black', 'html-5', 'js', 'ts', 'lua', 'mongo', 'nest', 'node', 'postgres', 'postman', 'py', 'react', 'sql', 'tailwind'];

  return (
    <div className="mt-16 mb-36">
      <hr />
      <h3 className="md:text-left text-center text-blue-500 md:text-2xl text-3xl font-bold md:my-4 my-12">Skills</h3>

      <div className="flex flex-wrap justify-center sm:justify-start gap-4">
        {skills.map(skill => (
          <SkillApp key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
