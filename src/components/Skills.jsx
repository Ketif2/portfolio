import { skillsData } from '../data/Data';
import SkillCard from './ui/SkillCard';

const Skills = () => {
  const duplicatedSkills = [...skillsData, ...skillsData];

  return (
    <section id="skills" className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"style={{color: 'var(--foreground-color)'}}>
            TECH <span className="text-red-500">SKILLS</span> 
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Tecnologías y herramientas que domino
          </p>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="rounded-2xl absolute left-0 top-0 w-30 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="rounded-2xl absolute right-0 top-0 w-30 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
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
          <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-gray-800 rounded-2xl px-6 py-3 border-2 border-gray-200 dark:border-gray-700 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm">
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              Tech <span className="text-red-500">Stack</span>
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;