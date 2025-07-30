import React from 'react';

// Sumdemo: A class component for performing sum of two numbers
class Sumdemo extends React.Component {
  constructor(props) {
    super(props);
    // Component state
    this.state = {
      txt1: '', // First number input
      txt2: '', // Second number input
      ans: '',  // Result message
      error: '' // Error message if input is invalid
    };
    this.doSum = this.doSum.bind(this);
  }

  // Function to compute the sum
  doSum() {
    const no1 = parseInt(this.state.txt1);
    const no2 = parseInt(this.state.txt2);

    // Input validation
    if (isNaN(no1) || isNaN(no2)) {
      this.setState({ error: "❌ Please enter valid numbers.", ans: '' });
    } else {
      const result = no1 + no2;
      this.setState({ ans: `🧮 Sum is ${result}`, error: '' });
    }
  }

  render() {
    return (
      <div className="p-8 max-w-2xl mx-auto mt-12 bg-gradient-to-br from-indigo-50 via-sky-100 to-violet-100 rounded-3xl shadow-2xl border border-indigo-300">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10 tracking-wide">
          ➕ Sum Calculator
        </h1>

        {/* Input Fields */}
        <div className="space-y-6 mb-10">
          <label className="block text-lg font-semibold text-gray-800">
            Number 1:
            <input
              type="text"
              value={this.state.txt1}
              onChange={(e) => this.setState({ txt1: e.target.value })}
              placeholder="Enter first number"
              className="mt-2 w-full sm:w-1/2 block shadow-inner border border-gray-300 rounded-xl py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </label>

          <label className="block text-lg font-semibold text-gray-800">
            Number 2:
            <input
              type="text"
              value={this.state.txt2}
              onChange={(e) => this.setState({ txt2: e.target.value })}
              placeholder="Enter second number"
              className="mt-2 w-full sm:w-1/2 block shadow-inner border border-gray-300 rounded-xl py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </label>
        </div>

        {/* Calculate Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={this.doSum}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg py-3 px-8 rounded-full shadow-xl transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            🚀 Calculate Sum
          </button>
        </div>

        {/* Output Section */}
        {this.state.ans && (
          <p className="mt-10 p-5 bg-blue-100 text-blue-800 text-center text-lg font-semibold border border-blue-300 rounded-xl shadow-sm">
            {this.state.ans}
          </p>
        )}

        {/* Error Handling */}
        {this.state.error && (
          <p className="mt-6 p-4 bg-red-100 text-red-700 text-center text-lg font-semibold border border-red-300 rounded-xl shadow-sm">
            {this.state.error}
          </p>
        )}
      </div>
    );
  }
}

export default Sumdemo;
