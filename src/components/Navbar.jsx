import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../App';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Nuevo orden: Home - Projects - Skills - About Me - Resume - Contact
  const navLinks = [
    { href: '#inicio', label: 'Home' },
    { href: '#proyectos', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About Me' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' }
  ];

   return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            ● <span className="text-red-500">KEVIN</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={`${link.href}-${link.label}`}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium hover:text-red-500 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                <span>MENU</span>
                {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={`mobile-${link.href}-${link.label}`}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 text-sm font-medium hover:text-red-500 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;