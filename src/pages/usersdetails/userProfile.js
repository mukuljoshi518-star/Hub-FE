import React, { useState } from 'react';

const UserProfile = () => {
  const [user] = useState({
    name: 'Mukul Joshi',
    bio: 'Passionate developer & wellness advocate',
  });

  const [mood, setMood] = useState('');
  const [stressLevel, setStressLevel] = useState(5);
  const [sleepHours, setSleepHours] = useState(7);
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState('');
  const [doctors] = useState([
    { name: 'Dr. A Sharma', specialty: 'Psychologist' },
    { name: 'Dr. R Verma', specialty: 'Nutritionist' },
  ]);
  const [aiInsights, setAiInsights] = useState([]);

  const addMeal = () => {
    if (newMeal.trim()) {
      setMeals([...meals, newMeal]);
      setNewMeal('');
    }
  };

  const generateAIInsight = () => {
    const tips = [
      "Try meditating for 10 minutes daily.",
      "Increase your water intake.",
      "Consider consulting a nutritionist.",
      "Stretch before bedtime for better sleep.",
    ];
    setAiInsights(tips);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans bg-gray-50 min-h-screen">
      {/* USER INFO */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl mb-8 shadow-md">
        <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
        <p className="text-lg opacity-90">{user.bio}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* MENTAL HEALTH SECTION */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🧠 Mental Health</h2>
          <div className="mb-4">
            <label className="block font-medium mb-1">Mood Check-in</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="How are you feeling?"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Stress Level: {stressLevel}</label>
            <input
              type="range"
              min="1"
              max="10"
              value={stressLevel}
              onChange={(e) => setStressLevel(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Sleep Hours: {sleepHours} hrs</label>
            <input
              type="range"
              min="1"
              max="12"
              value={sleepHours}
              onChange={(e) => setSleepHours(e.target.value)}
              className="w-full"
            />
          </div>
        </section>

        {/* NUTRITION TRACKER */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🥗 Nutrition Tracker</h2>
          <div className="flex gap-2 mb-4">
            <input
              className="flex-1 border border-gray-300 rounded px-3 py-2"
              value={newMeal}
              placeholder="Log your meal"
              onChange={(e) => setNewMeal(e.target.value)}
            />
            <button onClick={addMeal} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Add
            </button>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 max-h-40 overflow-auto">
            {meals.map((meal, i) => (
              <li key={i}>{meal}</li>
            ))}
          </ul>
        </section>

        {/* DOCTOR FINDER */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🩺 Find a Doctor</h2>
          <div className="space-y-4 max-h-60 overflow-auto">
            {doctors.map((doc, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg hover:shadow transition cursor-pointer">
                <h3 className="text-lg font-bold">{doc.name}</h3>
                <p className="text-gray-600">{doc.specialty}</p>
                <button className="mt-2 text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* AI HEALTH INSIGHTS */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🧠 AI Health Insights</h2>
          <button
            onClick={generateAIInsight}
            className="mb-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            Generate Insights
          </button>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 max-h-52 overflow-auto">
            {aiInsights.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
