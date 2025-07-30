import React from 'react'; // Importing the React library

// Sumdemo is a Class Component that allows users to add two numbers.
class Sumdemo extends React.Component {
  // Constructor initializes the component's state and binds methods
  constructor(props) {
    super(props);
    this.state = {
      txt1: '', // Stores first input value
      txt2: '', // Stores second input value
      ans: ''   // Stores the sum result
    };
    this.doSum = this.doSum.bind(this); // Bind 'this' context to the doSum method
  }

  // Method to calculate the sum of txt1 and txt2
  doSum() {
    // Convert string inputs to integers, default to 0 if invalid
    const no1 = parseInt(this.state.txt1) || 0;
    const no2 = parseInt(this.state.txt2) || 0;
    const c = no1 + no2;

    // Update the state with the calculated sum
    this.setState({ ans: `🧮 Sum is ${c}` });
  }

  // Render method to display the UI
  render() {
    return (
      <div className="p-6 max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-xl border border-indigo-300">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8 tracking-tight">
          ➕ Sum Calculator
        </h1>

        {/* Input Fields Section */}
        <div className="space-y-6 mb-8">
          {/* Input for Number 1 */}
          <label className="block text-lg font-semibold text-gray-800">
            Number 1:
            <input
              type="text"
              value={this.state.txt1} // Controlled input value from state
              onChange={(e) => this.setState({ txt1: e.target.value })} // Update state on change
              className="mt-2 w-full sm:w-1/2 block shadow-inner border border-gray-300 rounded-xl py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Enter first number"
            />
          </label>

          {/* Input for Number 2 */}
          <label className="block text-lg font-semibold text-gray-800">
            Number 2:
            <input
              type="text"
              value={this.state.txt2} // Controlled input value from state
              onChange={(e) => this.setState({ txt2: e.target.value })} // Update state on change
              className="mt-2 w-full sm:w-1/2 block shadow-inner border border-gray-300 rounded-xl py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Enter second number"
            />
          </label>
        </div>

        {/* Add Numbers Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={this.doSum} // Trigger sum calculation
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Calculate Sum
          </button>
        </div>

        {/* Display Sum Answer */}
        {this.state.ans && (
          <p className="mt-8 p-4 bg-blue-100 text-blue-800 text-center text-lg font-medium border border-blue-300 rounded-lg shadow-sm">
            {this.state.ans}
          </p>
        )}
      </div>
    );
  }
}

export default Sumdemo; // Exporting the component for use in other parts of the app
