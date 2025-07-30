import React from 'react';

function EventDemo() {
  const [message, setMessage] = React.useState('');

  const demo = () => {
    setMessage("✅ Welcome! Button clicked.");
  };

  const PrintData = (event) => {
    console.log("Type is : " + event.type);
    console.log("Name is : " + event.target.name);
    console.log("Value is : " + event.target.value);
    setMessage(`📋 Type: ${event.type}, Name: ${event.target.name}, Value: ${event.target.value}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-xl border border-orange-300">
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-8 tracking-tight">
        🎯 Event Handling Demo
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <button
          type="button"
          onClick={demo}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 px-6 rounded-full shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Click Me
        </button>

        <button
          type="button"
          onClick={() => setMessage("⚡ Inline event triggered!")}
          className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-3 px-6 rounded-full shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Inline Click
        </button>

        <button
          type="button"
          name="btn1"
          onClick={PrintData}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg py-3 px-6 rounded-full shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Print Button Data
        </button>
      </div>

      <div className="mb-8">
        <label
          htmlFor="textInput"
          className="block text-lg font-semibold text-center text-gray-800 mb-2"
        >
          Text Input:
        </label>
        <input
          id="textInput"
          type="text"
          name="txt1"
          onChange={PrintData}
          className="w-full max-w-xl mx-auto block py-3 px-4 rounded-xl border border-gray-300 text-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200"
          placeholder="Type something here..."
        />
      </div>

      {message && (
        <div className="mt-8 p-5 bg-indigo-100 border border-indigo-300 text-indigo-800 text-lg rounded-xl text-center font-medium shadow-sm">
          <p className="font-bold mb-1">Latest Event Message:</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default EventDemo;
