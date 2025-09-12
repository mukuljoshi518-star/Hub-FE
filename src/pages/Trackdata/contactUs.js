import React, { useState } from 'react';

export const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 via-white to-purple-50">
      <div className="w-full max-w-lg p-8 rounded-3xl shadow-2xl bg-white backdrop-blur-md border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-100 rounded-full p-3 mb-3">
            {/* Envelope Icon - You can use Heroicons */}
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-500 mt-2 text-center">
            We’d love to hear from you! Fill out the form below and we’ll get in touch.
          </p>
        </div>
        {submitted ? (
          <div className="text-green-600 text-lg font-medium text-center">
            Thanks for reaching out!<br />We’ll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transform transition hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
