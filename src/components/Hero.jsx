import profile from '../assets/Profile.jpeg';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const stats = [
    { number: '2+', label: 'Años Experiencia' },
    { number: '10+', label: 'Proyectos Realizados' },
    { number: '24/7', label: 'Disponibilidad' }
  ];

  const services = [
    {
      title: 'DESARROLLO FRONTEND',
      description: 'Creación de interfaces modernas y responsivas con las últimas tecnologías'
    },
    {
      title: 'DESARROLLO BACKEND',
      description: 'APIs robustas y escalables para aplicaciones web y móviles'
    },
    {
      title: 'UI/UX DESIGN',
      description: 'Diseño centrado en el usuario con experiencias intuitivas y atractivas'
    },
    {
      title: 'AWS CLOUD',
      description: 'Infraestructura escalable y segura para potenciar la innovación y el rendimiento en la nube.'
    }
  ];

  return (
    <section id="inicio" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <p className="dark:text-gray-800/300 text-lg">
                Hola, Soy Kevin
              </p>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                UN <span className="text-red-500">DEVELOPER</span>
                <br />
                <span className="font-light italic">& UIUX</span>
                <br />
                <span className="text-red-500">APASIONADO</span>
              </h1>

              <p className="text-lg dark:text-gray-800/300 max-w-md leading-relaxed">
                Transformando ideas en experiencias digitales increíbles - desarrollo web y diseño 
                de experiencias.
              </p>
              
              <a 
                href="/cv/CV_KevinRevelo.pdf" 
                download="Kevin_Revelo_CV.pdf"
                className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
              >
                <span>DESCARGAR CV</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-4-4V3" />
                </svg>
              </a>
              <div className="flex items-center space-x-3">
                  <a
                    href="https://github.com/Ketif2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-100 dark:bg-gray-500/10 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 group"
                    title="Ver GitHub"
                  >
                    <Github className="w-6 h-6 dark:text-gray-800/700 group-hover:text-red-500" />
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/kevin-revelo-flores-820262295/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-100 dark:bg-gray-500/10 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 group"
                    title="Ver LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 dark:text-gray-800/700 group-hover:text-blue-500" />
                  </a>
                </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-red-500/20 to-transparent p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-2xl">
                  <img 
                    src={profile}
                    alt="Kevin - Desarrollador Software" 
                    className="w-full h-full object-cover object-center filter brightness-110 contrast-110 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-400 rounded-full opacity-70"></div>
              
              <div className="absolute -inset-2 border-2 border-red-500/30 rounded-full animate-spin-slow opacity-60"></div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-right">
                  <div className={`text-3xl font-bold ${stat.highlight ? 'text-red-500' : ''}`}>
                    {stat.highlight && '*'}{stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;