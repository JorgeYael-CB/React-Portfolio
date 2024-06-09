import 'animate.css';
import Typewriter from 'typewriter-effect';

export const HeroApp = () => {
  return (
    <section className='h-dvh bg-black relative'>
      <div className='text-white text-center py-4 relative z-10 animate__animated animate__fadeInLeft'>
        <h1 className='md:text-6xl text-5xl font-bold pt-40'>Backend Web Developer</h1>
        <p className='md:text-xl text-lg font-normal mt-4 text-white'>Jorge Yael CB</p>
        <div id='typewriter' className='md:text-xl text-base mt-5 italic'>
          <Typewriter
            options={{
              strings: ['Transforming ideas into scalable solutions', 'JavaScript Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <a href="#about-me" className='text-blue-500 mt-12 inline-block font-medium text-base'>Learn more about me</a>
      </div>
    </section>
  );
};
