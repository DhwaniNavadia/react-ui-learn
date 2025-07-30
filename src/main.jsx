import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import the main App component

// The `main.jsx` file is typically the entry point of a React application.
// It renders the main App component into the root DOM element.

// 'createRoot' creates a React root for the DOM element where your React app will be mounted.
// document.getElementById('root') gets the HTML element with id="root" (from public/index.html or similar).
createRoot(document.getElementById('root')).render(
    // 'render' method is used to display React elements (your components) inside the root DOM node.
    // 'StrictMode' is a tool for highlighting potential problems in an application.
    // It does not render any visible UI. It activates additional checks and warnings for its descendants.
    <StrictMode>
        <App /> {/* The main App component is rendered here. */}
    </StrictMode>
);
