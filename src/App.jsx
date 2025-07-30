import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import all individual components
import Home from './Home';
import About from './About';
import Contact from './Contact';
import EventDemo from './EventDemo';
import Counter from './Counter';
import Sumdemo from './Sumdemo';

// App is the main component that orchestrates the entire application, including routing.
// It's a functional component that acts as the entry point for the UI.
function App() {
    return (
        // 'Router' wraps the entire application to enable routing.
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 font-inter antialiased text-gray-800">
                <h1 className="text-6xl md:text-7xl font-extrabold text-center mb-12 text-gray-900 drop-shadow-xl leading-tight">
                    Welcome to My React App!
                </h1>

                <br /><br /><br />
                {/* Navigation bar with 'Link' components. */}
                <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 p-5 bg-white rounded-3xl shadow-2xl border border-gray-100">
                    {/* 'Link' components define navigation to different routes. */}
                    {/* The 'to' prop specifies the path to navigate to. */}
                    <Link to='/home' className="text-xl font-semibold text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-110 px-6 py-3 rounded-full hover:bg-blue-50 shadow-md">Home</Link>|
                    <Link to='/about' className="text-xl font-semibold text-gray-700 hover:text-purple-700 transition duration-300 ease-in-out transform hover:scale-110 px-6 py-3 rounded-full hover:bg-purple-50 shadow-md">About</Link>|
                    <Link to='/contact' className="text-xl font-semibold text-gray-700 hover:text-green-700 transition duration-300 ease-in-out transform hover:scale-110 px-6 py-3 rounded-full hover:bg-green-50 shadow-md">Contact</Link>|
                    <Link to='/eventdemo' className="text-xl font-semibold text-gray-700 hover:text-orange-700 transition duration-300 ease-in-out transform hover:scale-110 px-6 py-3 rounded-full hover:bg-orange-50 shadow-md">EventDemo</Link>|
                    <Link to='/counter' className="text-xl font-semibold text-gray-700 hover:text-teal-700 transition duration-300 ease-in-out transform hover:scale-110 px-6 py-3 rounded-full hover:bg-teal-50 shadow-md">Counter</Link>|
                    <Link to='/sumdemo' className="text-xl font-semibold text-gray-700 hover:text-indigo-700 transition duration-300 ease-in-out transform hover:scale-110 px-6 py-3 rounded-full hover:bg-indigo-50 shadow-md">Sum</Link>|
                </nav>

                <div className="max-w-5xl mx-auto space-y-10 p-4">
                    {/* 'Routes' component: It looks through all its children 'Route' elements and renders the first one whose path matches the current URL. */}
                    <Routes>
                        {/* 'Route' component: Defines a specific path and the element to render when that path is matched. */}
                        {/* The 'path' prop specifies the URL path. */}
                        {/* The 'element' prop specifies the React component to render. */}

                        <Route path='/' element={<Home />} /> {/* Default route for the root path. */}
                        <Route path='/home' element={<Home />} /> {/* Route for /home, renders Home component. */}
                        <Route path='/about' element={<About />} /> {/* Route for /about, renders About component. */}
                        <Route path='/contact' element={<Contact />} /> {/* Route for /contact, renders Contact component. */}
                        <Route path='/eventdemo' element={<EventDemo />} /> {/* Route for /eventdemo, renders EventDemo component. */}
                        <Route path='/counter' element={<Counter />} /> {/* Route for /counter, renders Counter component. */}
                        <Route path='/sumdemo' element={<Sumdemo />} /> {/* Route for /sumdemo, renders Sumdemo component. */}
                        {/* Routes with dynamic parts (e.g., /cake/:city) */}
                        <Route path='/cake/ahmedabad' element={<h1 className="text-3xl font-bold text-red-700 text-center">Ahmedabad Cake</h1>} />
                        <Route path='/cake/surat' element={<h1 className="text-3xl font-bold text-red-700 text-center">Surat Cake</h1>} />
                        {/* Catch-all route: The '*' wildcard matches any path that hasn't been matched by previous routes. */}
                        {/* This is commonly used for 404 "Not Found" pages. */}
                        <Route path='*' element={<h1 className="text-3xl font-bold text-gray-700 text-center">404 File Not Found</h1>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App; // Exports the main App component, making it the entry point for the React application.
