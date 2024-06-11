import 'animate.css';


export const FooterApp = () => {

  return (
    <footer className="bg-gray-300 mt-28 p-8 text-center">
      <h3 className="font-bold text-indigo-700 py-4 text-4xl text-center">DevComplete Studios</h3>
      <nav className="flex flex-row justify-center gap-6 py-8">
        <a href="#">
          <img className="h-12 w-12" src="/icons/github.svg" alt="Github icon" />
        </a>
        <a href="#">
          <img className="h-16 w-16" src="/icons/linkedin.svg" alt="LinkedIn icon" />
        </a>
        <a href="#">
          <img className="h-16 w-16" src="/icons/cv.svg" alt="CV icon" />
        </a>
      </nav>
      <div className="flex flex-col md:flex-row md:justify-around items-center mt-8">
        <div>
          <h4 className="font-semibold text-2xl mb-4">Quick Links</h4>
          <ul>
            <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about-me" className="hover:text-blue-600">About</a></li>
            <li><a href="#questions" className="hover:text-blue-600">Reviews</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <h4 className="font-semibold text-2xl mb-4">Contact Us</h4>
          <p>Email: contact@devcompletestudios.com</p>
          <p>Phone: +52 5581262206</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-8">&copy; 2024 DevComplete Studios. All rights reserved.</p>
    </footer>
  );
};
