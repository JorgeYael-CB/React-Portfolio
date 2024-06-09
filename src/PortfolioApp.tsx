import { ContactByEmailUsecase } from "./core/use-cases/contact-by-email.useCase"
import { AboutMeApp, NavBarApp } from "./presentation/components"
import { HeroApp } from "./presentation/components/Hero/HeroApp";
import { ContactByEmailApp } from "./presentation/components/contact/ContactByEmailApp"
import { QuestionsApp } from "./presentation/components/questions/QuestionsApp";



export const PortfolioApp = () => {
  const contactByEmailUsecase = new ContactByEmailUsecase();


  return (
    <>
      <NavBarApp />
      <HeroApp/>

      <div className="max-w-7xl mx-auto">
        <AboutMeApp/>
        <ContactByEmailApp callback={ contactByEmailUsecase.byEmail }/>

        <QuestionsApp/>
      </div>
    </>
  )
}
