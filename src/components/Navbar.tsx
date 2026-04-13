import { Link } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/50 dark:bg-black/50 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <span className="font-sans font-bold text-2xl tracking-tighter text-gray-900 dark:text-white transition-colors duration-300">
              BASTORIANS
            </span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-gray-600 dark:text-white/70 transition-colors duration-300">
            <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>

            {/* Case Studies Dropdown */}
            <div className="relative group py-6">
              <Link to="/case-studies" className="hover:text-gray-900 dark:hover:text-white transition-colors pb-1">Case Studies</Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl p-2 min-w-[240px] shadow-2xl flex flex-col transition-colors duration-300">
                  <Link
                    to="/case-studies/haiwa-tv"
                    className="px-4 py-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white text-sm"
                  >
                    Haiwa TV
                  </Link>
                  <Link
                    to="/case-studies/physiotherapy"
                    className="px-4 py-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white text-sm"
                  >
                    Physiotherapy Clinics
                  </Link>
                  <Link
                    to="/case-studies/blue-metal"
                    className="px-4 py-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white text-sm"
                  >
                    Blue Metal Suppliers
                  </Link>
                  <Link
                    to="/case-studies/finance"
                    className="px-4 py-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white text-sm"
                  >
                    Finance
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About Us</Link>

            <div className="flex items-center space-x-4 ml-4 border-l border-black/10 dark:border-white/10 pl-4 transition-colors duration-300">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
              </button>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-brand-blue text-white rounded-full hover:bg-brand-lightBlue transition-colors font-semibold"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;