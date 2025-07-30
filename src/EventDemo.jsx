import React from 'react';

// EventDemo: Functional component demonstrating various event handlers
function EventDemo() {
  const [message, setMessage] = React.useState('');

  // Named event handler for button click
  const demo = () => {
    setMessage("✅ Welcome! Button clicked.");
  };

  // Event logger and updater — for button clicks and input changes
  const PrintData = (event) => {
    console.log("Type is : " + event.type);
    console.log("Name is : " + event.target.name);
    console.log("Value is : " + event.target.value);
    setMessage(`📋 Type: ${event.type}, Name: ${event.target.name}, Value: ${event.target.value}`);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto mt-12 bg-gradient-to-br from-yellow-50 via-rose-100 to-purple-100 rounded-3xl shadow-2xl border border-orange-300">

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-orange-700 mb-10 tracking-wide">
        🎯 Event Handling Demo
      </h1>

      {/* Button Row */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {/* Named function button */}
        <button
          type="button"
          onClick={demo}
          className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          Click Me
        </button>

        {/* Inline function button */}
        <button
          type="button"
          onClick={() => setMessage("⚡ Inline event triggered!")}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Inline Click
        </button>

        {/* Event handler with data */}
        <button
          type="button"
          name="btn1"
          onClick={PrintData}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          Print Button Data
        </button>
      </div>

      {/* Text input with event logging */}
      <div className="mb-10">
        <label
          htmlFor="textInput"
          className="block text-lg font-semibold text-center text-gray-800 mb-2"
        >
          ✏️ Type Something:
        </label>
        <input
          id="textInput"
          type="text"
          name="txt1"
          onChange={PrintData}
          className="w-full max-w-xl mx-auto block py-3 px-4 rounded-xl border border-gray-300 text-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition duration-300"
          placeholder="Start typing here..."
        />
      </div>

      {/* Dynamic message display */}
      {message && (
        <div className="mt-10 p-5 bg-indigo-100 border border-indigo-300 text-indigo-800 text-lg rounded-xl text-center font-medium shadow-md">
          <p className="font-bold mb-1">📨 Latest Event Message:</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default EventDemo;
