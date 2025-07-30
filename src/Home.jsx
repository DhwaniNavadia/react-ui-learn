import React from 'react';

function Home() {
    var a = 10;
    var b = 20;
    var mycolor = { color: 'white', backgroundColor: '#8b5cf6' }; // Vivid violet

    return (
        <div className="p-6 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 rounded-3xl shadow-2xl border border-indigo-200 mb-10">
            <h1 className="text-5xl font-black text-rose-700 text-center mb-6 drop-shadow-md">
                Welcome to React UI Learn
            </h1>

            <p className="text-xl text-slate-800 mb-6 text-center leading-relaxed">
                This section offers a bright insight into our vision, purpose, and values. <br />
                We love crafting interactive and meaningful UI experiences with React. <br />
                Whether you're here to learn, explore, or build — this project is for you!
            </p>

            <div className="flex justify-center gap-6 mb-6">
                <div className="bg-amber-100 text-amber-900 px-6 py-4 rounded-xl shadow-inner text-center font-semibold text-lg">
                    A value is <span className="text-rose-600 font-bold">{a}</span>
                </div>
                <div className="bg-teal-100 text-teal-900 px-6 py-4 rounded-xl shadow-inner text-center font-semibold text-lg">
                    B value is <span className="text-indigo-600 font-bold">{b}</span>
                </div>
            </div>

            <p
                style={{ color: '#fff', backgroundColor: '#ef4444' }} // Red
                className="p-4 rounded-xl text-lg font-medium text-center mb-4 shadow-lg"
            >
                Hello, I am a paragraph with a bright red background
            </p>

            <p
                style={mycolor}
                className="p-4 rounded-xl text-lg font-medium text-center shadow-lg"
            >
                I am another colorful paragraph styled with inline violet
            </p>
        </div>
    );
}

export default Home;
