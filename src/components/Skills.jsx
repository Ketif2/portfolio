const Skills = () => {
  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'Python', level: 80, color: 'bg-green-500' },
        { name: 'Java', level: 75, color: 'bg-red-600' },
        { name: 'C#', level: 70, color: 'bg-purple-600' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'bg-cyan-500' },
        { name: 'Vue.js', level: 80, color: 'bg-green-600' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
        { name: 'SASS/SCSS', level: 85, color: 'bg-pink-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Express.js', level: 80, color: 'bg-gray-700' },
        { name: 'Django', level: 75, color: 'bg-green-700' },
        { name: 'Spring Boot', level: 70, color: 'bg-green-600' },
        { name: 'ASP.NET', level: 65, color: 'bg-blue-700' }
      ]
    },
    {
      title: 'Bases de Datos',
      skills: [
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-800' },
        { name: 'MongoDB', level: 80, color: 'bg-green-800' },
        { name: 'MySQL', level: 85, color: 'bg-blue-600' },
        { name: 'Redis', level: 70, color: 'bg-red-700' },
        { name: 'Firebase', level: 75, color: 'bg-yellow-600' }
      ]
    },
    {
      title: 'DevOps & Deploy',
      skills: [
        { name: 'Docker', level: 80, color: 'bg-blue-500' },
        { name: 'Git/GitHub', level: 95, color: 'bg-gray-800' },
        { name: 'Vercel', level: 90, color: 'bg-black' },
        { name: 'Netlify', level: 85, color: 'bg-teal-600' },
        { name: 'Railway', level: 75, color: 'bg-purple-700' }
      ]
    },
    {
      title: 'Nube & Servicios',
      skills: [
        { name: 'AWS', level: 75, color: 'bg-orange-600' },
        { name: 'Google Cloud', level: 70, color: 'bg-blue-500' },
        { name: 'Azure', level: 65, color: 'bg-blue-700' },
        { name: 'Cloudflare', level: 80, color: 'bg-orange-500' },
        { name: 'Supabase', level: 85, color: 'bg-green-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Tecnologías y herramientas que domino para crear soluciones completas y escalables
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-center text-red-500">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Siempre aprendiendo y manteniéndome actualizado con las últimas tecnologías
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full">
              Aprendizaje Continuo
            </span>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
              Certificaciones Activas
            </span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
              Proyectos Reales
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;