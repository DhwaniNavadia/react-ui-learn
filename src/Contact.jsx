import React from 'react';

function Contact() {
  return (
    <div className="p-6 max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-xl border border-green-300">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6 tracking-tight">
        📬 Contact Us
      </h1>
      <p className="text-lg text-gray-800 text-center leading-relaxed">
        You can reach us at <a href="mailto:yugthummar001@gmail.com" className="text-green-600 font-semibold hover:underline">yugthummar001@gmail.com</a>
      </p>
    </div>
  );
}

export default Contact;
