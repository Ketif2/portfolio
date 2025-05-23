import { useState, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MyResume from './components/MyResume';
import NavigationTimeline from './components/ui/NavigationTimeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
        <Hero />
        <AboutMe />
        <MyResume />
        <Skills/>
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;