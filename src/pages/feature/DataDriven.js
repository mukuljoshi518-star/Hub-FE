import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import AIImageGenerator from './aiImageGen'; // Placeholder for AI feedback function

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LifeTracker = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [moodLog, setMoodLog] = useState([]);
  const [mood, setMood] = useState(5); // Scale of 1 to 10
  const [journal, setJournal] = useState('');
  const [aiFeedback, setAIFeedback] = useState('');

  const handleAddGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, { text: newGoal, completed: false }]);
      setNewGoal('');
    }
  };

  const toggleGoal = (index) => {
    const updated = [...goals];
    updated[index].completed = !updated[index].completed;
    setGoals(updated);
  };

  const logMood = () => {
    const today = new Date().toISOString().split('T')[0];
    const exists = moodLog.find((entry) => entry.date === today);
    if (!exists) {
      setMoodLog([...moodLog, { date: today, mood: mood }]);
    }
  };

  const getAIFeedback = async () => {
    const response = await AIImageGenerator(journal); // placeholder
    setAIFeedback(response || "You're doing great! Keep going!");
  };

  useEffect(() => {
    if (journal.length > 10) getAIFeedback();
  }, [journal]);

  const moodChartData = {
    labels: moodLog.map((entry) => entry.date),
    datasets: [
      {
        label: 'Mood',
        data: moodLog.map((entry) => entry.mood),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">📊 Life Tracker</h1>

      {/* Goals & Habits */}
      <section>
        <h2 className="text-xl font-semibold">🎯 Goals & Habits</h2>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            className="border p-2 flex-1"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Add a new goal..."
          />
          <button onClick={handleAddGoal} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
        <ul className="mt-3 space-y-2">
          {goals.map((goal, i) => (
            <li
              key={i}
              className={`p-2 border rounded cursor-pointer ${goal.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => toggleGoal(i)}
            >
              {goal.text}
            </li>
          ))}
        </ul>
      </section>

      {/* Mood Logger */}
      <section>
        <h2 className="text-xl font-semibold">😊 Mood Log</h2>
        <div className="flex items-center gap-4 mt-2">
          <input
            type="range"
            min="1"
            max="10"
            value={mood}
            onChange={(e) => setMood(parseInt(e.target.value))}
          />
          <span>{mood}/10</span>
          <button onClick={logMood} className="bg-green-500 text-white px-4 py-2 rounded">
            Log Mood
          </button>
        </div>

        {moodLog.length > 0 && (
          <div className="mt-4">
            <Line data={moodChartData} />
          </div>
        )}
      </section>

      {/* Journaling + AI Feedback */}
      <section>
        <h2 className="text-xl font-semibold">📝 Journal</h2>
        <textarea
          className="w-full h-32 p-2 border"
          placeholder="Reflect on your day..."
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
        />
        {aiFeedback && (
          <div className="mt-2 p-4 bg-yellow-100 border-l-4 border-yellow-500">
            <strong>🤖 AI Feedback:</strong> {aiFeedback}
          </div>
        )}
      </section>
    </div>
  );
};

export default LifeTracker;
