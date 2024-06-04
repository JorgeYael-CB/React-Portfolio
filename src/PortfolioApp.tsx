import { ContactByEmailUsecase } from "./core/use-cases/contact-by-email.useCase"
import { NavBarApp } from "./presentation/components"
import { ContactByEmailApp } from "./presentation/components/contact/ContactByEmailApp"



export const PortfolioApp = () => {
  const contactByEmailUsecase = new ContactByEmailUsecase();


  return (
    <div className="max-w-7xl mx-auto">
      <NavBarApp />

      <ContactByEmailApp callback={ contactByEmailUsecase.byEmail }/>
    </div>
  )
}
