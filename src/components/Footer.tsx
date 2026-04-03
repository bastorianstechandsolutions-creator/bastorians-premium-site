import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-sans font-bold text-xl tracking-tighter text-white">
            BASTORIANS
          </span>
          <p className="text-white/40 text-sm mt-2">
            Driving pure ROI through elite performance marketing.
          </p>
        </div>
        <div className="flex space-x-6 text-sm text-white/50">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-white/5 text-center text-white/30 text-xs">
        &copy; {new Date().getFullYear()} Bastorians tech and solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;