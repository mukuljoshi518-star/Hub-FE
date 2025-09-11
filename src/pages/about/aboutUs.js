import React from "react";

export const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-50 via-white to-blue-50">
      <div className="w-full max-w-3xl p-10 rounded-3xl shadow-2xl bg-white border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          {/* You can use a minimalist icon or your logo here */}
          <div className="bg-purple-100 rounded-full p-3 mb-2">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6M3 20h5v-2a4 4 0 013-3.87M12 4a4 4 0 014 4c0 1.1-.26 2.15-.73 3.05A6.42 6.42 0 0112 14.37a6.42 6.42 0 01-3.27-3.32A6.41 6.41 0 018 8a4 4 0 014-4z" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">About Us</h2>
          <p className="text-gray-500 mt-2 text-center max-w-lg">
            Welcome to our company! We’re passionate about creating amazing digital experiences that connect people and empower growth.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-purple-600 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To deliver innovative solutions that delight our users, foster creativity, and drive positive change in the industry.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">Our Values</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-1 pl-2">
              <li>✨ User-first design</li>
              <li>👩‍💻 Collaboration and transparency</li>
              <li>🌱 Continuous learning & improvement</li>
              <li>🌍 Social responsibility</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Meet the Team</h3>
            <div className="flex flex-wrap gap-6 mt-4 justify-center">
              {/* Example Team Cards */}
              <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center w-40 shadow hover:shadow-md transition">
                <img src="https://i.pravatar.cc/80?img=1" alt="Team 1" className="rounded-full w-16 h-16 mb-2" />
                <span className="font-semibold text-gray-800">Mukul Joshi</span>
                <span className="text-sm text-gray-500">CEO</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center w-40 shadow hover:shadow-md transition">
                <img src="https://i.pravatar.cc/80?img=2" alt="Team 2" className="rounded-full w-16 h-16 mb-2" />
                <span className="font-semibold text-gray-800">Jamie Lee</span>
                <span className="text-sm text-gray-500">CTO</span>
              </div>
              {/* Add more team members here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
