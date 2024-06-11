import 'animate.css';
import Typewriter from 'typewriter-effect';

export const HeroApp = () => {
  return (
    <section className='h-screen bg-gradient-to-b from-indigo-900 to-purple-900 relative flex items-center justify-center px-4'>
      <div className='text-white text-center relative z-10 animate__animated animate__fadeInLeft'>
        <h1 className='md:text-7xl text-4xl font-bold'>
          Portfolio Web Backend Developer
        </h1>
        <p className='md:text-xl text-lg font-normal mt-4'>
          Jorge Yael CB
        </p>

        <div id='typewriter' className='md:text-2xl text-xl mt-5 italic'>
          <Typewriter
            options={{
              strings: [
                'The best for your website',
                'Backend Web Developer',
                'Creating efficient solutions',
                'Innovative and reliable',
                'Focused on performance',
                'Dedicated to quality',
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 30,
            }}
          />
        </div>

        <a href="#about-me" className='text-indigo-400 mt-12 inline-block font-medium text-base hover:text-indigo-300 transition duration-300 ease-in-out'>
          Learn more about me
        </a>
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60'></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <svg className='w-64 h-64 text-indigo-500 opacity-20' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 0C9.243 0 6.623 1.053 4.687 2.775C2.75 4.496 1.5 6.851 1.5 9.5C1.5 13.81 4.94 17 9.5 17H11V14H9.5C6.929 14 4.5 12.071 4.5 9.5C4.5 7.219 6.219 5.5 8.5 5.5C9.601 5.5 10.645 5.926 11.383 6.707L12 7.293L12.617 6.707C13.355 5.926 14.399 5.5 15.5 5.5C17.781 5.5 19.5 7.219 19.5 9.5C19.5 12.071 17.071 14 14.5 14H13V17H14.5C19.06 17 22.5 13.81 22.5 9.5C22.5 6.851 21.25 4.496 19.313 2.775C17.377 1.053 14.757 0 12 0Z'/>
        </svg>
      </div>
    </section>
  );
};
