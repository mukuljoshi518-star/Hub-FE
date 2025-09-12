import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/chatbot.css';
import { sendMessageToBot } from '../../redux/chatbotRedux/action';
import {useParams} from 'react-router-dom'

export const Chatbot = () => {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  // const {userId} = useParams(null)
// console.log('userId???////',userId)
  const { messages, loading } = useSelector((state) => state.chatbot);

 const storedUser = JSON.parse(localStorage.getItem('user'));
  const userId = storedUser?.id;
  console.log('userId from localStorage >>>', userId);
  
  const toggleChatbot = () => setIsOpen(!isOpen);
  

  const handleSend = () => {
    if (!input.trim()) return;
    dispatch(sendMessageToBot(input,userId));
    setInput('');
  };

  return (
    <>
      <button className="btn bg-dark chatbot-toggle-button" onClick={toggleChatbot}>
        <i className="bi bi-chat-dots-fill"></i>
      </button>

      {isOpen && (
        <div className="chatbot-container shadow bg-white rounded">
          <div className="chatbot-messages p-2">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.sender}`}>
                <span>{msg.text}</span>
              </div>
            ))}
            {loading && <div className="chatbot-message bot">Typing...</div>}
          </div>
          <div className="p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="form-control"
            />
          </div>
        </div>
      )}
    </>
  );
};
