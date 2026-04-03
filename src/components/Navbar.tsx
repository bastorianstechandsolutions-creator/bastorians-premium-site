import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <span className="font-sans font-bold text-2xl tracking-tighter text-white">
              BASTORIANS
            </span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-brand-blue text-white rounded-full hover:bg-brand-lightBlue transition-colors font-semibold"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;