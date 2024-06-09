import { SkillApp } from "./SkillApp";

export const SkillsApp = () => {
  const skills = ['css-3', 'git', 'github', 'html-5', 'javascript', 'typescript', 'lua', 'mongo', 'nest', 'node', 'postgres', 'postman', 'python', 'react', 'sql', 'tailwind'];

  return (
    <div className="mt-12 mb-36 py-6 px-4 shadow-sm bg-gray-100 rounded-sm">
      <h3 className="text-center mb-6 text-black md:text-4xl text-3xl font-bold md:my-4 my-12">Skills</h3>

      <div className="flex flex-wrap justify-center sm:justify-start gap-4">
        {skills.map(skill => (
          <SkillApp key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
