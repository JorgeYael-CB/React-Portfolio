import { SkillsApp } from "./SkillsApp"

export const AboutMeApp = () => {
  return (
    <div id="about-me" className="my-28 shadow-sm bg-white px-6 py-12 rounded-sm">
      <h2 className="text-center text-5xl font-semibold text-blue-600">About Me</h2>

      <div className="text-center text-lg mt-4 p-12 font-semibold text-indigo-900">
        <p>
          Hello, my name is Jorge Yael, and I am a FullStack developer specializing in the server side,
          utilizing what governs each application but is not visible to the user (Backend Developer).
          I am currently self-studying machine learning and data science. I love programming and learning.
        </p>
        <p className="mt-2">
          I have completed FullStack MERN projects using hexagonal architecture on the server side, following best practices,
          making the code easily maintainable and scalable, and even migrating the database in seconds without affecting the rest of the code.
          Additionally, I handle errors excellently, either with a Discord bot or by keeping them stored in a database.
        </p>
      </div>

      <SkillsApp/>
    </div>
  )
}
