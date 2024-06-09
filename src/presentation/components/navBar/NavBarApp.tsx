interface Props {
  title?: string;
}

export const NavBarApp = ({ title = 'DevComplete Studios' }: Props) => {
  return (
    <div className="max-w-full mx-auto py-4 px-8 bg-gray-700">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-0 gap-y-6 items-center">
        <h1 className="text-2xl font-semibold text-white text-center md:text-left mb-4 md:mb-0">
          {title}
        </h1>
        <nav className="flex flex-col md:flex-row md:gap-3 gap-6">
          <a className="text-gray-200 uppercase text-sm font-semibold hover:text-white transition-all" href="#contact">Contact</a>
          <a className="text-gray-200 uppercase text-sm font-semibold hover:text-white transition-all" href="#questions">Questions</a>
          <a className="text-gray-200 uppercase text-sm font-semibold hover:text-white transition-all" href="#skills">Skills</a>
        </nav>
      </div>
    </div>
  );
};
