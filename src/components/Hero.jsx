import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  const stats = [
    { number: '3+', label: 'Años Experiencia' },
    { number: '50+', label: 'Proyectos Realizados' },
    { number: '99%', label: 'Client Satisfaction', highlight: true },
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
      title: 'DESARROLLO FULL STACK',
      description: 'Soluciones completas desde la base de datos hasta la interfaz de usuario'
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
                UN <span className="text-red-500">UI/UX</span>
                <br />
                <span className="font-light italic">& Brand</span>
                <br />
                <span className="text-red-500">DESARROLLADOR</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                Transformando ideas en experiencias digitales increíbles - desarrollo web y diseño 
                que cautiva, involucra y entrega resultados.
              </p>

              <Button variant="primary" size="lg" className="rounded-full px-8">
                CONTACT ME →
              </Button>
            </div>
          </div>

          {/* Center - Profile Image */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src="/api/placeholder/320/320" 
                  alt="Kevin - Desarrollador Software" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full"></div>
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