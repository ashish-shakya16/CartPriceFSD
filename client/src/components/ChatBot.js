import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import './ChatBot.css';

const BotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="bot-svg"
    aria-hidden="true"
  >
    <defs>
      <style>{'.cls-1{fill:#42a5f5}'}</style>
    </defs>
    <g data-name="Bot Assistant">
      <path className="cls-1" d="M24 41a1 1 0 0 0 0 2 1 1 0 0 0 0-2z" />
      <path
        className="cls-1"
        d="M33.83 36H14.17a2 2 0 0 0-2 2.17L13 48h22l.82-9.83A2 2 0 0 0 33.83 36zM24 45a3 3 0 1 1 3-3 3 3 0 0 1-3 3zM11 15v10H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM41 17v6a2 2 0 0 1-2 2h-2V15h2a2 2 0 0 1 2 2zM32 14H16a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-13 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm7 4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm3-4a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"
      />
      <path
        d="M42.19 35.47a5 5 0 0 0-3.47-4.41l-4.16-1.33A5 5 0 0 0 38 25V15a5 5 0 0 0-4-4.9V5.22a3 3 0 1 0-4.4-.44L28.23 10h-8.46L18.4 4.78a3 3 0 1 0-4.4.44v4.88a5 5 0 0 0-4 4.9v10a5 5 0 0 0 3.44 4.73l-4.17 1.33a5 5 0 0 0-3.46 4.41L5 46.93A1 1 0 0 0 6 48h5l-.16-2H7.07l.74-10.39A3 3 0 0 1 9.88 33l8.41-2.69.74 3A1 1 0 0 0 20 34h8a1 1 0 0 0 1-.76l.74-3L38.11 33a3 3 0 0 1 2.08 2.64L40.93 46h-3.76L37 48c5.46 0 5.31.11 5.72-.32s.35.21-.53-12.21zM32 2a1 1 0 0 1 0 2 1 1 0 0 1 0-2zm-.64 3.93A3.39 3.39 0 0 0 32 6v4h-1.7zM16 2a1 1 0 0 1 0 2 1 1 0 0 1 0-2zm1.7 8H16V6a3.39 3.39 0 0 0 .64-.07zm9.52 22h-6.44l-.5-2h7.44zM15 28a3 3 0 0 1-3-3V15a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3z"
        fill="#424242"
      />
    </g>
  </svg>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "👋 Hi! I'm Ashish's AI assistant. Ask me anything about his skills, projects, or experience!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [connectionError, setConnectionError] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { 
      type: 'user', 
      text: userMessage,
      timestamp: new Date()
    }]);
    setLoading(true);
    setConnectionError(false);

    try {
      const response = await axios.post('http://localhost:5000/api/chatbot/chat', {
        message: userMessage
      });

      setMessages(prev => [...prev, {
        type: 'bot',
        text: response.data.response,
        confidence: response.data.confidence,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setConnectionError(true);
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "I'm having trouble connecting right now. Feel free to reach out via the contact form below!",
        isError: true,
        timestamp: new Date()
      }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        type: 'bot',
        text: "👋 Hi! I'm Ashish's AI assistant. Ask me anything about his skills, projects, or experience!",
        timestamp: new Date()
      }
    ]);
    setConnectionError(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What are your AI/ML skills?",
    "Tell me about your projects",
    "What's your experience?",
    "How can I contact you?",
    "What frameworks do you use?",
    "What's your educational background?"
  ];

  const handleQuickQuestion = (question) => {
    setInput(question);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <BotIcon />
          <span className="pulse-ring"></span>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="header-content">
              <BotIcon />
              <div>
                <h3>AshBot</h3>
                <span className="status">Online</span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type} ${msg.isError ? 'error' : ''}`}>
                {msg.type === 'bot' && <BotIcon />}
                <div className="message-bubble">
                  <p>{msg.text}</p>
                  {msg.confidence && (
                    <span className="confidence">
                      Confidence: {(msg.confidence * 100).toFixed(0)}%
                    </span>
                  )}
                  {msg.timestamp && (
                    <span className="timestamp">{formatTime(msg.timestamp)}</span>
                  )}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="message bot">
                <BotIcon />
                <div className="message-bubble typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && !connectionError && (
            <div className="quick-questions">
              <p>Quick questions:</p>
              <div className="quick-buttons-grid">
                {quickQuestions.map((q, index) => (
                  <button
                    key={index}
                    className="quick-btn"
                    onClick={() => handleQuickQuestion(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.length > 1 && (
            <div className="chat-actions">
              <button className="clear-btn" onClick={clearChat} title="Clear conversation">
                🔄 New Chat
              </button>
            </div>
          )}

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading || !input.trim()}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
