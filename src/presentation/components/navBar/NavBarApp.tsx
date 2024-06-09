import 'animate.css';


interface Props {
  title?: string;
}

export const NavBarApp = ({ title = 'DevComplete Studios' }: Props) => {
  return (
    <div className="max-w-full mx-auto py-4 px-8 bg-black">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-0 gap-y-6 items-center animate__animated animate__fadeIn">
        <h1 className="text-2xl font-semibold text-blue-500 text-center md:text-left mb-4 md:mb-0">
          { title }
        </h1>
        <nav className="flex flex-col md:flex-row md:gap-3 gap-6 text-center">
          <a className="text-blue-500 uppercase text-base font-semibold hover:underline" href="#contact">Contact</a>
          <a className="text-blue-500 uppercase text-base font-semibold hover:underline" href="#questions">Questions</a>
          <a className="text-blue-500 uppercase text-base font-semibold hover:underline" href="#skills">Skills</a>
        </nav>
      </div>
    </div>
  );
};
