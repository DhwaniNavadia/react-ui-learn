import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      msg: ''
    };
    this.increamentData = this.increamentData.bind(this);
    this.decreamentData = this.decreamentData.bind(this);
  }

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
    var a = 10;

    return (
      <div className="p-6 max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-xl border border-teal-300">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-6 tracking-tight">
          🔢 Interactive Counter
        </h1>

        <div className="text-lg text-gray-800 text-center space-y-2">
          <p>
            A value is <span className="font-semibold text-teal-600">{a}</span>
          </p>
          <p>
            Counter Value is{' '}
            <span className="text-4xl font-bold text-teal-800">{this.state.counter}</span>
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <button
            type="button"
            value="+"
            onClick={this.increamentData}
            className="bg-purple-600 hover:bg-purple-700 text-white text-3xl font-bold px-6 py-3 rounded-full shadow-lg transform transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            +
          </button>
          <button
            type="button"
            value="-"
            onClick={this.decreamentData}
            className="bg-red-600 hover:bg-red-700 text-white text-3xl font-bold px-6 py-3 rounded-full shadow-lg transform transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            −
          </button>
        </div>

        {this.state.msg && (
          <p className="mt-6 text-center p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg font-medium shadow-sm">
            {this.state.msg}
          </p>
        )}
      </div>
    );
  }
}

export default Counter;
