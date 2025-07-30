import React from 'react';

function Contact() {
    return (
        <div className="p-6 bg-gradient-to-br from-yellow-100 via-lime-100 to-emerald-100 rounded-3xl shadow-2xl border border-lime-200 mb-10">
            <h1 className="text-5xl font-black text-lime-800 text-center mb-6 drop-shadow-md">
                Get in Touch
            </h1>

            <p className="text-xl text-emerald-800 text-center leading-relaxed font-medium">
                We’d love to hear from you! <br />
                Reach out anytime at <span className="font-semibold underline text-blue-700">dhwaninavadia29@gmail.com</span>
            </p>

            <div className="mt-6 flex justify-center">
                <div className="bg-rose-100 border border-rose-300 text-rose-700 px-6 py-4 rounded-2xl shadow-lg text-center text-lg">
                    💌 Drop us a message and we’ll get back to you as soon as we can!
                </div>
            </div>
        </div>
    );
}

export default Contact;
