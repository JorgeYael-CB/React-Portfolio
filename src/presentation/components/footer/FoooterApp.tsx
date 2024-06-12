import 'animate.css';

export const FooterApp = () => {
  return (
    <footer className="bg-gray-100 mt-28 p-8 text-center">
      <h3 className="font-bold text-indigo-700 py-4 text-4xl">DevComplete Studios</h3>
      <nav className="flex justify-center gap-6 py-8">
        <a href="https://github.com/JorgeYael-CB" aria-label="GitHub">
          <img className="h-12 w-12 hover:scale-110 transition-transform" src="/icons/github.svg" alt="GitHub icon" />
        </a>
        <a href="https://www.linkedin.com/in/jorge-yael-chino-5a5037306/" aria-label="LinkedIn">
          <img className="h-12 w-12 hover:scale-110 transition-transform" src="/icons/linkedin.svg" alt="LinkedIn icon" />
        </a>
        <a href="/files/cv.pdf" download aria-label="Download CV">
          <img className="h-12 w-12 hover:scale-110 transition-transform" src="/icons/cv.svg" alt="CV icon" />
        </a>
      </nav>
      <div className="flex flex-col md:flex-row md:justify-around items-center mt-8">
        <div>
          <h4 className="font-semibold text-2xl mb-4">Quick Links</h4>
          <ul>
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about-me" className="hover:text-blue-600">About</a></li>
            <li><a href="#questions" className="hover:text-blue-600">Reviews</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <h4 className="font-semibold text-2xl mb-4">Contact Us</h4>
          <p className="hover:text-blue-600">Email: <a href="mailto:contact@devcompletestudios.com">contact@devcompletestudios.com</a></p>
          <p className="hover:text-blue-600">Phone: <a href="tel:+525581262206">+52 5581262206</a></p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-8">&copy; 2024 DevComplete Studios. All rights reserved.</p>
    </footer>
  );
};
