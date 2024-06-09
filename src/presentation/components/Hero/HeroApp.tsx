import 'animate.css';



export const HeroApp = () => {
  return (
    <section className="bg-white dark:bg-gray-900 p-8">
        <div className="animate__animated animate__fadeInLeft py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 animate__fadeInDown">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at DevComplete Studios we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#about-me" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Learn more
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
                <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                    <a href="https://www.youtube.com/channel/UCaorjdhDs4JMW1QvwmKJv-g" target="_blank" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                        <img src="/icons/YT.svg" alt="Icon YT" className="h-16" />
                        <p className="mt-4 text-center text-white font-medium text-xl">Youtube</p>
                    </a>
                    <a target="_blank" href="https://github.com/JorgeYael-CB" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                        <img src="/icons/github_blanco.svg" alt="Icon github" className="h-16" />
                        <p className="mt-4 text-center text-white font-medium text-xl">Github</p>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/jorge-yael-chino-5a5037306/" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                        <img className="h-16" src="/icons/linkedin.svg" alt="Icon linkedin" />
                        <p className="mt-2 text-center text-white font-medium text-xl">Linkedin</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
