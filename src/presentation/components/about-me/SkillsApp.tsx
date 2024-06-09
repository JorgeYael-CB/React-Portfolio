import { useEffect, useState } from "react";
import { SkillApp } from "./SkillApp";
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export const SkillsApp = () => {
  const skills = ['css-3', 'git', 'github', 'html-5', 'javascript', 'typescript', 'lua', 'mongo', 'nest', 'node', 'postgres', 'postman', 'python', 'react', 'sql', 'tailwind'];
  const [isView, setIsView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setIsView(true);
    }
  }, [inView]);

  return (
    <div className="mt-12 mb-36 py-6 px-4 shadow-sm bg-gray-100 rounded-sm" id="skills">
      <h3 className="text-center text-black md:text-4xl text-3xl font-bold my-12">Skills</h3>

      <div
        ref={ ref }
        className={`flex flex-wrap justify-center sm:justify-start gap-3 ${isView ? 'animate__animated animate__fadeInUp' : ''}`}
      >
        {skills.map(skill => (
          <SkillApp key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
