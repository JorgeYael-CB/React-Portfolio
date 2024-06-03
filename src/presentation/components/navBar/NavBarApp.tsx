

interface Props {
  title?:string;
}


export const NavBarApp = ( {title = 'DevComplete Studios'}: Props ) => {
  return (
    <div className="max-w-full flex flex-row-reverse mx-auto justify-between p-4 items-center bg-indigo-600 rounded-md">
      <nav className="flex flex-row gap-3">
        <a className="text-gray-200 uppercase text-sm font-semibold hover:text-white transition-all" href="#">Contact</a>
        <a className="text-gray-200 uppercase text-sm font-semibold hover:text-white transition-all" href="#">Questions</a>
        <a className="text-gray-200 uppercase text-sm font-semibold hover:text-white transition-all" href="#">Skills</a>
      </nav>

      <h1 className="text-left text-2xl font-semibold text-white">
        { title }
      </h1>
  </div>
  )
}