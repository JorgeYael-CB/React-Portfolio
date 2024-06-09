import 'animate.css';
import Typewriter from 'typewriter-effect';

export const HeroApp = () => {
  return (
    <section className='h-dvh bg-black relative'>
      <div className='text-white text-center py-4 relative z-10 animate__animated animate__fadeInLeft'>
        <h1 className='md:text-6xl text-5xl font-bold pt-40'>Backend Web Developer</h1>
        <p className='md:text-xl text-lg font-normal mt-3 text-white'>Jorge Yael CB</p>
        <div id='typewriter' className='md:text-lg text-base mt-5 italic'>
          <Typewriter
            options={{
              strings: ['Transforming ideas into scalable solutions', 'JavaScript Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <a href="#about-me" className='absolute bottom-36 left-1/2 transform -translate-x-1/2 text-blue-500 animate__animated animate__fadeIn'>
        <svg className='w-8 h-8 animate-bounce' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
        </svg>
      </a>
    </section>
  );
};
