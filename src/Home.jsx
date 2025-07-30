import React from 'react';

function Home() {
  var a = 10;
  var b = 20;
  var mycolor = { color: 'white', backgroundColor: 'green' };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl max-w-3xl mx-auto mt-10 border border-gray-200">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6 tracking-tight">
        🏡 Home Sweet Home
      </h1>

      <div className="space-y-4 text-lg text-gray-800">
        <p>
          <span className="font-medium text-gray-600">A value is:</span>{' '}
          <span className="text-blue-600 font-semibold">{a}</span>
        </p>

        <p>
          <span className="font-medium text-gray-600">B value is:</span>{' '}
          <span className="text-blue-600 font-semibold">{b}</span>
        </p>

        <p
          style={{ color: 'red', backgroundColor: 'black' }}
          className="p-4 rounded-lg font-medium text-center shadow-md"
        >
          Hello, I am a &lt;p&gt; tag with inline styles
        </p>

        <p
          style={mycolor}
          className="p-4 rounded-lg font-medium text-center shadow-md"
        >
          I am again a &lt;p&gt; tag using JS style object
        </p>
      </div>
    </div>
  );
}

export default Home;
