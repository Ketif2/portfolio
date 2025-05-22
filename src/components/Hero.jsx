import Button from './ui/Button';
import profile from '../assets/Profile.jpeg';

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
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Hola, Soy Kevin
              </p>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                UN <span className="text-red-500">DEVELOPER</span>
                <br />
                <span className="font-light italic">& UIUX</span>
                <br />
                <span className="text-red-500">APASIONADO</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                Transformando ideas en experiencias digitales increíbles - desarrollo web y diseño 
                de experiencias.
              </p>

              <Button variant="primary" size="lg" className="rounded-full px-8">
                CONTÁCTAME →
              </Button>
            </div>
          </div>

          {/* Center - Profile Image */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-red-500/20 to-transparent p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-2xl">
                  <img 
                    src={profile}
                    alt="Kevin - Desarrollador Software" 
                    className="w-full h-full object-cover object-center filter brightness-110 contrast-110 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-400 rounded-full opacity-70"></div>
              
              {/* Floating ring */}
              <div className="absolute -inset-2 border-2 border-red-500/30 rounded-full animate-spin-slow opacity-60"></div>
            </div>
          </div>

          {/* Right - Stats */}
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

        {/* Services Grid */}
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