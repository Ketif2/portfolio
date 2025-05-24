import React, { useState } from 'react';
import { interestsData, softSkillsData } from '../../data/Data';

const InterestsTab = () => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now()
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const SkillItem = ({ skill, index, delay = 0 }) => (
    <div 
      className="skill-item-animated"
      style={{ 
        animationDelay: `${delay}ms`,
        '--hover-color': '#ef4444'
      }}
      onClick={createRipple}
    >
      <div className="relative overflow-hidden flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-500 cursor-pointer group">
        
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}

        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white text-sm flex-shrink-0 shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:animate-pulse">
          <span className="group-hover:animate-bounce">
            {skill.icon}
          </span>
        </div>
        
        <div className="flex-1 min-w-0 transition-all duration-300 group-hover:translate-x-2">
          <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-red-500 transition-colors duration-300">
            {skill.name}
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {skill.description}
          </p>
        </div>

        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      
      <div className="space-y-4">
        <h3 className="text-center text-lg font-bold text-gray-100">Mis Intereses</h3>
        
        <div className="space-y-3">
          {interestsData.map((interest, index) => (
            <SkillItem 
              key={index} 
              skill={interest} 
              index={index}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-center text-lg font-bold text-gray-100">Habilidades Blandas</h3>
        
        <div className="space-y-3">
          {softSkillsData.map((skill, index) => (
            <SkillItem 
              key={index} 
              skill={skill} 
              index={index}
              delay={(index + interestsData.length) * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestsTab;