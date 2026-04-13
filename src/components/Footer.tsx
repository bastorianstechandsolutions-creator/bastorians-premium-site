import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-background dark:bg-background-dark py-12 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-sans font-bold text-xl tracking-tighter text-gray-900 dark:text-white transition-colors duration-300">
            BASTORIANS
          </span>
          <p className="text-gray-500 dark:text-white/40 text-sm mt-2 transition-colors duration-300">
            Driving pure ROI through elite performance marketing.
          </p>
        </div>
        <div className="flex space-x-6 text-sm text-gray-500 dark:text-white/50 transition-colors duration-300">
          <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-black/5 dark:border-white/5 text-center text-gray-400 dark:text-white/30 text-xs transition-colors duration-300">
        &copy; {new Date().getFullYear()} Bastorians tech and solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;