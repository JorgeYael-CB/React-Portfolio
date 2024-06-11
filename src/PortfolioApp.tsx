import { AboutMeApp, NavBarApp, SkillsApp } from "./presentation/components";
import { HeroApp } from "./presentation/components/Hero/HeroApp";
import { RankingApp } from "./presentation/components/about-me/RankingApp";
import { ContactByEmailApp } from "./presentation/components/contact/ContactByEmailApp";
import { FooterApp } from "./presentation/components/footer/FoooterApp";
import { QuestionsApp } from "./presentation/components/questions/QuestionsApp";


export const PortfolioApp = () => {
  return (
    <>
      <NavBarApp />
      <HeroApp />

      <main>
        <AboutMeApp />

        <div className="max-w-5xl mx-auto">
          <SkillsApp />
          <RankingApp/>
          <ContactByEmailApp/>
        </div>
        <QuestionsApp/>
      </main>
      <FooterApp/>
    </>
  );
};
