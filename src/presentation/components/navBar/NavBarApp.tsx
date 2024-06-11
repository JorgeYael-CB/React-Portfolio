import { useState } from 'react';
import { FaBars, FaEnvelope, FaQuestionCircle, FaTimes, FaTools, FaUser } from 'react-icons/fa';

export const NavBarApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-white shadow-md rounded-b-lg p-3 z-50 animate__animated animate__fadeInDown'>
        <nav className='flex items-center md:justify-center justify-end gap-4'>
          <button
            className='text-3xl text-gray-700 md:hidden'
            onClick={ toggleSidebar }
            aria-label='Open Menu'
          >
            <FaBars />
          </button>
          <div className='hidden md:flex items-center gap-6'>
            <a
              className='flex items-center rounded-md px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-lg transition-colors duration-300'
              href="#about-me"
              aria-label="About"
            >
              <FaUser className="mr-2" /> About
            </a>
            <a
              className='flex items-center rounded-md px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-lg transition-colors duration-300'
              href="#contact"
              aria-label="Contact"
            >
              <FaEnvelope className="mr-2" /> Contact
            </a>
            <a
              className='flex items-center rounded-md px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-lg transition-colors duration-300'
              href="#questions"
              aria-label="Questions"
            >
              <FaQuestionCircle className="mr-2" /> Questions
            </a>
            <a
              className='flex items-center rounded-md px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-lg transition-colors duration-300'
              href="#skills"
              aria-label="Skills"
            >
              <FaTools className="mr-2" /> Skills
            </a>
          </div>
        </nav>
      </header>
      <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button
            className='absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition duration-300'
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
          <FaTimes className='w-6 h-6' />
        </button>
        <div className='flex flex-col mt-16 gap-4 px-4'>
          <a
            className='flex items-center rounded-md px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-lg transition-colors duration-300'
            href="#about-me"
            aria-label="About"
          >
            <FaUser className="mr-2" /> About
          </a>
          <a
            className='flex items-center rounded-md px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-lg transition-colors duration-300'
            href="#contact"
            aria-label="Contact"
          >
            <FaEnvelope className="mr-2" /> Contact
          </a>
          <a
            className='flex items-center rounded-md px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-lg transition-colors duration-300'
            href="#questions"
            aria-label="Questions"
          >
            <FaQuestionCircle className="mr-2" /> Questions
          </a>
          <a
            className='flex items-center rounded-md px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-lg transition-colors duration-300'
            href="#skills"
            aria-label="Skills"
          >
            <FaTools className="mr-2" /> Skills
          </a>
        </div>
      </div>
      <div className={`fixed inset-0 bg-black opacity-50 z-40 ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
    </>
  );
};
