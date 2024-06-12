export const AboutMeApp = () => {
  return (
    <section id="about-me" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
              Hello! I'm Jorge Yael CB, a passionate Backend Web Developer focused on creating efficient and innovative solutions. I have experience in Node.js, Express.js, and other backend technologies.
              My goal is to develop high-quality web applications that meet clients' needs and exceed their expectations. I am constantly learning and improving my skills to stay updated with industry trends.
            </p>
            <p className="mb-4">
              When I'm not programming, I enjoy exploring new technologies, reading about advancements in the tech world, and engaging in various hobbies like playing video games and scripting.
              I have implemented hexagonal architecture and follow best coding practices to ensure my projects are scalable and maintainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
