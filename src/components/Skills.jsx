import { skillsData } from '../data/Data';

const Skills = () => {
  const duplicatedSkills = [...skillsData, ...skillsData];

  const SkillCard = ({ skill, index }) => {
    return (
      <div className="flex-shrink-0 w-32 md:w-40">
        <div className="group bg-gray-800 hover:bg-gray-700 rounded-xl p-4 md:p-6 transition-all duration-300 border border-gray-700 hover:border-red-500/50 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/10 mx-2">
          
          <div className="text-center mb-3">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gray-700 group-hover:bg-red-500 rounded-xl flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
              {skill.icon}
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-white font-medium text-xs md:text-sm group-hover:text-red-400 transition-colors duration-300 leading-tight">
              {skill.name}
            </h3>
          </div>
          
          <div className="flex justify-center mt-2">
            <div className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            TECH  <span className="text-red-500">SKILLS</span> 
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tecnologías y herramientas que domino
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-infinite-scroll p-4">
              {duplicatedSkills.map((skill, index) => (
                <SkillCard 
                  key={`${skill.name}-${index}`}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-gray-800 rounded-2xl px-6 py-3 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
            <span className="text-gray-300 text-sm font-medium">
              Tech <span className="text-red-500">Stack</span>
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;