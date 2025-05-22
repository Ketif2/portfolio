const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Profile highlight */}
          <div className="lg:col-span-4">
            <div className="relative group">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto flex items-center justify-center rotate-3 hover:rotate-6 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">KR</span>
                  </div>
                  <h3 className="text-xl font-bold">Kevin Revelo</h3>
                  <p className="text-red-500 font-medium">Full Stack Developer</p>
                  
                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">3+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Años</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">10+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Proyectos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Content container */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                
                {/* Decorative quote mark */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg rotate-12">
                  "
                </div>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Soy <span className="font-semibold text-red-500">Kevin Revelo</span>, un talento en desarrollo apasionado por la tecnología y el aprendizaje continuo.
                    Me encanta investigar y profundizar en los temas que despiertan mi interés, 
                    siempre con un enfoque disciplinado y orientado a resultados.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Cuando estoy rodeado de personas motivadoras, mi productividad se duplica; y cuando la energía falta, suelo ser quien la impulsa. 
                    Me considero un buen <span className="font-semibold text-red-500">líder</span>, alguien que contagia entusiasmo, proactividad e innovación en cada proyecto en el que participa.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Me encanta conectar con personas sin importar su cultura o contexto, porque creo que el intercambio de ideas enriquece.
                    Soy <span className="font-semibold text-red-500">sociable, comunicativo, carismático y aventurero</span>, cualidades que me ayudan a expresarme con claridad y aportar
                    soluciones donde sea necesario.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;