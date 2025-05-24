import { useState } from 'react';
import { contactInfo } from '../data/Data';

const Contact = () => {
  const [userEmail, setUserEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent('Contacto desde Portfolio');
    const body = encodeURIComponent(
      `Hola Kevin,\n\nMe gustaría contactarte para...\n\n${userEmail ? `Mi email de contacto: ${userEmail}\n\n` : ''}Saludos,`
    );
    const ccParam = userEmail ? `&cc=${encodeURIComponent(userEmail)}` : '';
    window.location.href = `mailto:kevrevelo@hotmail.com?subject=${subject}&body=${body}${ccParam}`;
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-red-500">CONTACTO</span>
          </h2>
          <p className="font-semibold dark:text-gray-400/800 max-w-2xl mx-auto text-lg">
            ¡Contactame y hablemos!
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold dark:text-gray- mb-6">
                Información de Contacto
              </h2>
              <p className="text-gray-600 dark:text-gray-400/800 leading-relaxed mb-8">
                Estoy disponible para nuevas oportunidades y proyectos interesantes. 
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-red-500/30 hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
                        <p className="font-medium text-gray-900 dark:text-white group-hover:text-red-500 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-xl text-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
                        <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-700/100 dark:to-red-100/10 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-3xl">
                  📄
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Descarga mi CV
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Conoce más sobre mi experiencia profesional
                  </p>
                </div>
                <a
                  href="/cv/KevinRevelo.pdf" 
                  download="Kevin_Revelo_CV.pdf"
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Descargar</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-4-4V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contacto Rápido
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Ingresa tu email para un contacto más fácil
              </p>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tu Email (Opcional)
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-lg">
                      ✉️
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                        Email Directo
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Abre tu cliente de email
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={openEmailClient}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
                  >
                    Abrir Email
                  </button>
                </div>
                {userEmail && (
                  <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-800/30 rounded text-xs text-blue-700 dark:text-blue-300">
                    📧 Tu email se incluirá automáticamente en el mensaje
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-center mt-16">
              <button
                onClick={scrollToTop}
                className="group bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                title="Volver al inicio"
              >
                <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-800/600 mt-2">
                Volver al inicio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;