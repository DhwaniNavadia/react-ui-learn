import React from 'react';

// Class-based Counter component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1, // Initial counter value
      msg: ''     // Message for boundary feedback
    };

    // Bind methods to this instance
    this.increamentData = this.increamentData.bind(this);
    this.decreamentData = this.decreamentData.bind(this);
  }

  // Increment handler — prevents going above 3
  increamentData() {
    if (this.state.counter >= 3) {
      this.setState({ msg: "⚠️ Counter value cannot exceed 3." });
    } else {
      this.setState(prevState => ({
        counter: prevState.counter + 1,
        msg: ''
      }));
    }
  }

  // Decrement handler — prevents going below 1
  decreamentData() {
    if (this.state.counter <= 1) {
      this.setState({ msg: "⚠️ Counter value cannot be less than 1." });
    } else {
      this.setState(prevState => ({
        counter: prevState.counter - 1,
        msg: ''
      }));
    }
  }

  render() {
    const a = 10; // Example static value

    return (
      <div className="max-w-xl mx-auto mt-12 p-6 bg-gradient-to-br from-cyan-50 via-white to-teal-50 rounded-3xl shadow-2xl border border-teal-300">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-teal-800 mb-6 tracking-wide">
          🔢 Interactive Counter
        </h1>

        {/* Info display */}
        <div className="text-center text-gray-800 space-y-2 text-lg">
          <p>
            A value is <span className="font-semibold text-teal-700">{a}</span>
          </p>
          <p>
            Counter Value:
            <span className="text-4xl font-bold text-teal-900 ml-2">
              {this.state.counter}
            </span>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-8 mt-8">
          <button
            onClick={this.increamentData}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-3xl font-bold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            +
          </button>
          <button
            onClick={this.decreamentData}
            className="bg-rose-600 hover:bg-rose-700 text-white text-3xl font-bold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            −
          </button>
        </div>

        {/* Message display */}
        {this.state.msg && (
          <p className="mt-6 text-center p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg font-semibold shadow-sm">
            {this.state.msg}
          </p>
        )}
      </div>
    );
  }
}

export default Counter;
