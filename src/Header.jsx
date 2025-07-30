import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">My React Site</h1>
        <nav className="flex gap-6 text-white font-medium">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/counter" className="hover:text-yellow-300">Counter</Link>
          <Link to="/event" className="hover:text-yellow-300">Event</Link>
          <Link to="/sum" className="hover:text-yellow-300">Sum</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
