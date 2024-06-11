export const AboutMeApp = () => {
  return (
    <section id="about-me" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Sobre Mí
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center justify-center mb-8 md:mb-0 md:mr-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-1">
              <div className="flex items-center justify-center bg-white rounded-full h-full">
                {/* Consider using an SVG icon or avatar here */}
                <span className="block w-3/4 text-gray-800">
                  {/* SVG icon or avatar */}
                </span>
              </div>
            </div>
          </div>
          <div className="text-gray-700 text-lg leading-relaxed">
            <p>
              ¡Hola! Soy Jorge Yael CB, un apasionado Desarrollador Web Backend enfocado en crear soluciones eficientes e innovadoras. Tengo experiencia en Node.js, Express.js y otras tecnologías de backend.
            </p>
            <p className="mt-4">
              Mi objetivo es desarrollar aplicaciones web de alta calidad que satisfagan las necesidades de los clientes y superen sus expectativas. Estoy en constante aprendizaje y mejora de mis habilidades para mantenerme al día con las tendencias de la industria.
            </p>
            <p className="mt-4">
              Cuando no estoy programando, disfruto explorando nuevas tecnologías, leyendo sobre avances en el mundo tecnológico y participando en varios pasatiempos como los videojuegos y la escritura de scripts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
