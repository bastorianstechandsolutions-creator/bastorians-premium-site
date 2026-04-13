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

            {/* Case Studies Dropdown */}
            <div className="relative group py-6">
              <Link to="/case-studies" className="hover:text-white transition-colors pb-1">Case Studies</Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-2 min-w-[240px] shadow-2xl flex flex-col">
                  <Link
                    to="/case-studies/haiwa-tv"
                    className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white text-sm"
                  >
                    Haiwa TV
                  </Link>
                  <Link
                    to="/case-studies/physiotherapy"
                    className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white text-sm"
                  >
                    Physiotherapy Clinics
                  </Link>
                  <Link
                    to="/case-studies/blue-metal"
                    className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white text-sm"
                  >
                    Blue Metal Suppliers
                  </Link>
                  <Link
                    to="/case-studies/finance"
                    className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white text-sm"
                  >
                    Finance
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>

            <Link
              to="/contact"
              className="px-5 py-2.5 bg-brand-blue text-white rounded-full hover:bg-brand-lightBlue transition-colors font-semibold ml-4"
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