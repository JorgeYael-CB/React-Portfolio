import { useEffect, useState } from "react";
import { SkillApp } from "./SkillApp";
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export const SkillsApp = () => {
  const skills = [
    'css-3', 'git', 'github', 'html-5', 'javascript', 'typescript', 'lua', 
    'mongo', 'nest', 'node', 'postgres', 'postman', 'python', 'react', 'sql', 'tailwind'
  ];
  const [isView, setIsView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsView(true);
    }
  }, [inView]);

  return (
    <section className="mt-12 mb-36 py-6 px-4 shadow-lg bg-gray-50 rounded-lg" id="skills">
      <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 my-12">Skills</h3>
      <div
        ref={ ref }
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ${isView ? 'animate__animated animate__fadeInUp' : ''}`}
      >
        {skills.map(skill => (
          <SkillApp key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
};
