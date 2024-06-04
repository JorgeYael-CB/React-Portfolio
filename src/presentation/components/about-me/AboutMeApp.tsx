import { QuestionsApp } from "../questions/QuestionsApp"
import { SkillsApp } from "./SkillsApp"

export const AboutMeApp = () => {
  return (
    <div id="about-me" className="my-12">
      <h2 className="text-center text-4xl font-semibold text-black">About Me</h2>

      <SkillsApp/>
      <QuestionsApp/>
    </div>
  )
}
