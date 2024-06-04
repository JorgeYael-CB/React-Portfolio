

interface Props {
  title?:string;
}


export const NavBarApp = ( {title = 'DevComplete Studios'}: Props ) => {
  return (
    <div className="max-w-full flex flex-row-reverse mx-auto justify-between py-4 px-8 items-center bg-gray-700">
      <nav className="flex flex-row gap-3">
        <a className="text-gray-200 uppercase text-sm font-semibold hover:text-white transition-all" href="#contact">Contact</a>
        <a className="text-gray-200 uppercase text-sm font-semibold hover:text-white transition-all" href="#">Questions</a>
        <a className="text-gray-200 uppercase text-sm font-semibold hover:text-white transition-all" href="#">Skills</a>
      </nav>

      <h1 className="text-left text-2xl font-semibold text-white">
        { title }
      </h1>
  </div>
  )
}