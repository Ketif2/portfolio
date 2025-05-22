import React, { useState, useEffect } from 'react';

const NavigationTimeline = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  
  const sections = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'resume', label: 'Skills', href: '#resume' },
    { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'about', 'resume', 'proyectos', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      let current = 0;
      
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          current = index;
        }
      });
      
      setCurrentSection(current);
      
      // Detectar si está al final de la página
      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setIsAtEnd(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (index, href) => {
    setCurrentSection(index);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-end space-y-6">
        {/* Timeline Line */}
        <div className="relative">
          <div className="w-0.5 h-64 bg-gray-300 dark:bg-gray-600 relative">
            {/* Progress line */}
            <div 
              className={`w-0.5 absolute top-0 left-0 transition-all duration-700 ease-out ${
                isAtEnd ? 'bg-gradient-to-b from-red-400 via-red-500 to-red-600 shadow-red-500 shadow-sm' : 'bg-red-500'
              }`}
              style={{ 
                height: `${((currentSection + 1) / sections.length) * 100}%` 
              }}
            ></div>
          </div>

          {/* Timeline Points */}
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleSectionClick(index, section.href)}
              className="absolute -left-2 flex items-center group cursor-pointer"
              style={{ top: `${(index / (sections.length - 1)) * 100}%` }}
            >
              <div
                className={`w-4 h-4 rounded-full border-3 border-white dark:border-gray-900 transition-all duration-500 hover:scale-110 ${
                  index <= currentSection 
                    ? `bg-red-500 ${isAtEnd && index === sections.length - 1 ? 'animate-pulse shadow-lg shadow-red-500' : ''}` 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-red-300'
                } ${
                  index === currentSection ? 'ring-2 ring-red-500 ring-opacity-50' : ''
                }`}
              ></div>
              
              {/* Label */}
              <span 
                className={`ml-6 text-sm font-medium transition-all duration-500 opacity-0 group-hover:opacity-100 whitespace-nowrap ${
                  index === currentSection 
                    ? 'text-red-500 opacity-100' 
                    : 'text-gray-500 dark:text-gray-400'
                } ${
                  isAtEnd && index === sections.length - 1 ? 'text-red-400 font-bold' : ''
                }`}
              >
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTimeline;