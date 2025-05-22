import { useState, useEffect } from 'react';
import { certificationsData } from '../../data/Data';

const CertificationsTab = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    const timeouts = [];
    certificationsData.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 100);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleCardFlip = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const CertificationCard = ({ certification, index }) => {
    const isVisible = visibleCards.includes(index);
    const isFlipped = flippedCards.includes(index);
    
    return (
      <div 
        className={`group relative transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-12 scale-95'
        }`}
        style={{ perspective: '1000px' }}
      >
        <div 
          className={`relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          
          {/* FRONT SIDE */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-red-500/30 group-hover:scale-105 group-hover:-translate-y-2">
            
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 h-40">
              <img 
                src={certification.image} 
                alt={certification.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Year badge */}
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                {certification.year}
              </div>

              {/* Flip icon - ESTE ES EL QUE VOLTEA LA TARJETA */}
              <button
                onClick={(e) => handleCardFlip(index, e)}
                className="absolute top-3 left-3 w-8 h-8 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 hover:bg-red-50 dark:hover:bg-red-900/50 hover:scale-110"
                title="Ver descripción"
              >
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm leading-tight group-hover:text-red-500 transition-colors duration-300 line-clamp-2">
                  {certification.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  {certification.issuer}
                </p>
              </div>

              {/* Ver certificación link - VA A LINKEDIN */}
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-medium text-red-500 hover:text-red-600 transition-colors duration-200 group-hover:translate-x-1 transform transition-transform"
              >
                <span>Ver certificación</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          </div>

          {/* BACK SIDE */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl overflow-hidden shadow-lg border border-red-200 dark:border-red-800">
            
            <div className="p-6 h-full flex flex-col justify-between relative">
              
              {/* Flip back icon - BOTÓN PARA VOLVER */}
              <button
                onClick={(e) => handleCardFlip(index, e)}
                className="absolute top-3 right-3 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
                title="Volver al frente"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="space-y-3 pr-12">

                <h4 className="font-bold text-gray-900 dark:text-white text-sm leading-tight">
                  {certification.title}
                </h4>
                
                <p className="text-xs text-red-600 dark:text-red-400 font-semibold">
                  {certification.issuer}
                </p>
              </div>

              {/* Description */}
              <div className="flex-1 flex items-center py-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {certification.description}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 h-full flex flex-col">

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {certificationsData.map((certification, index) => (
          <CertificationCard 
            key={index} 
            certification={certification} 
            index={index} 
          />
        ))}
      </div>

      {/* LinkedIn Button */}
      <div className="text-center flex-shrink-0 pt-4">
        
        <a
          href="https://www.linkedin.com/in/kevin-revelo-flores-820262295/details/certifications/"
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 group"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>Ver más certificaciones</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
  
};

export default CertificationsTab;