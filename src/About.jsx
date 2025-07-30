import React from 'react'; // Import React

// About is a Class Component.
class About extends React.Component {
    // Constructor to initialize state if needed (currently unused).
    constructor(props) {
        super(props);
        this.state = {};
    }

    // Render method returns the JSX UI.
    render() {
        return (
            // Outer container with padding, gradient background, rounded corners, border and shadow.
            <div className="p-6 bg-gradient-to-br from-fuchsia-100 via-violet-100 to-purple-100 rounded-3xl shadow-2xl border border-fuchsia-200 mb-10">

                {/* Main heading with large font, purple color, center alignment and drop shadow */}
                <h1 className="text-5xl font-black text-purple-800 text-center mb-6 drop-shadow-md">
                    About Us
                </h1>

                {/* Main paragraph with smooth spacing and font settings */}
                <p className="text-xl text-gray-800 text-center leading-relaxed font-medium mb-4">
                    Welcome to our creative space built with 💖 React.
                    <br />Our team is passionate about delivering clean UI, hands-on learning, and purposeful interaction.
                </p>

                {/* Highlight box with bold text and a background to emphasize purpose */}
                <div className="flex justify-center">
                    <div className="bg-purple-200 border border-purple-300 px-6 py-4 rounded-2xl text-purple-900 font-semibold text-lg shadow-lg text-center max-w-xl">
                        🚀 This project is a fun journey through React components, states, props, and real-world web UI.
                    </div>
                </div>
            </div>
        );
    }
}

// Export the About component to be used in App.js or routing.
export default About;
