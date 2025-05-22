import React, { useState, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MyResume from './components/MyResume';
import NavigationTimeline from './components/ui/NavigationTimeline';

// Theme Context
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <Navbar />
        <NavigationTimeline />
        <main className="pt-16">
          <Hero />
          <AboutMe />
          <MyResume />
          {/* Secciones placeholder para navegación */}
          <section id="proyectos" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Proyectos</h2>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-lg">Sección de proyectos en construcción...</p>
              </div>
            </div>
          </section>
          <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact</h2>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-lg">Sección de contacto en construcción...</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;