import React from 'react';
import { Link } from 'react-router-dom';

// Header component with navigation bar
function Header() {
  return (
    // Sticky header with vibrant gradient and shadow
    <header className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        
        {/* Logo / Site Title */}
        <h1 className="text-white text-3xl font-extrabold tracking-wider drop-shadow-md mb-2 sm:mb-0">
          🌟 My React Playground
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-white font-semibold text-lg">
          <Link to="/" className="hover:text-yellow-300 transition-all duration-200 ease-in-out">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition-all duration-200 ease-in-out">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-all duration-200 ease-in-out">
            Contact
          </Link>
          <Link to="/counter" className="hover:text-yellow-300 transition-all duration-200 ease-in-out">
            Counter
          </Link>
          <Link to="/event" className="hover:text-yellow-300 transition-all duration-200 ease-in-out">
            Event
          </Link>
          <Link to="/sum" className="hover:text-yellow-300 transition-all duration-200 ease-in-out">
            Sum
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
