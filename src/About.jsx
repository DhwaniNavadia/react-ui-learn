import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="p-6 max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-xl border border-purple-300">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-6 tracking-tight">
          ℹ️ About Us
        </h1>
        <p className="text-lg text-gray-800 text-center leading-relaxed">
          Welcome to our application! This section gives you a glimpse into who we are,
          what we do, and why this project exists. We aim to build intuitive and educational
          experiences through React.
        </p>
      </div>
    );
  }
}

export default About;
