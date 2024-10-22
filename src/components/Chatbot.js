import React, { useState, useEffect, useRef } from "react";
import { MdSend } from "react-icons/md";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) {
      alert("Please enter a message.");
      return;
    }
    const timestamp = new Date().toLocaleTimeString();
    const userMessage = { text: newMessage, sender: "user", time: timestamp };
    setMessages([...messages, userMessage]);
    setNewMessage("");
    // Simulate bot response and typing indicator
    setIsTyping(true);
    setTimeout(() => {
      const botMessage = {
        text: "Echo: " + newMessage,
        sender: "bot",
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="text-white bg-blue-500 p-4 text-center font-bold text-xl">
        ChatBot React App Version 1.0.0
      </header>
      <div className="flex-grow overflow-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              message.sender === "user" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`p-2 my-2 rounded ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {message.text}
            </div>
            <span
              className={`text-xs ${
                message.sender === "user" ? "text-right" : ""
              }`}
            >
              {message.time}
            </span>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-left">
            <TypingIndicator />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-gray-200">
        <div className="flex gap-2">
          <input
            className="flex-grow p-2 rounded border-2 border-gray-300"
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            className="bg-blue-500 text-white rounded p-2"
            onClick={handleSendMessage}
          >
            <MdSend />
          </button>
        </div>
      </div>
    </div>
  );
};

const TypingIndicator = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="60px" height="33px" viewBox="0 0 60 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <path d="M12.2162652,30.8264704 C14.4835771,32.2056926 17.1454299,33 19.9926547,33 L45.0073453,33 C53.2834356,33 60,26.2827956 60,17.996704 L60,15.003296 C60,6.71781857 53.2875598,0 45.0073453,0 L19.9926547,0 C11.7165644,0 5,6.71720443 5,15.003296 L5,17.996704 C5,19.7846283 5.31256736,21.499554 5.88600667,23.0897305 C4.73745897,24.0058789 4,25.4170337 4,27 C4,29.7558048 6.23857625,32 9,32 C10.2234619,32 11.3460861,31.5587793 12.2162652,30.8264704 Z M0,31 C0,29.8954305 0.887729645,29 2,29 C3.1045695,29 4,29.8877296 4,31 C4,32.1045695 3.11227036,33 2,33 C0.8954305,33 0,32.1122704 0,31 Z" id="path-1"></path>
          <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="60" height="33" fill="white">
              <use xlink:href="#path-1"></use>
          </mask>
          <style>
            .dot {
              fill: #54636D;
              position: relative;
              animation: ball-beat 0.7s 0s infinite cubic-bezier(0.50, 0.05, 0.50, 0.95);
            }

            .dot:nth-child(2) {
              animation-delay: 0.2s !important;
            }

            .dot:nth-child(3) {
              animation-delay: 0.4s !important;
            }

            @keyframes ball-beat {
              0% {
                opacity: 0.7;
              }
              33.33% {
                opacity: 0.55;
              }
              66.67% {
                opacity: 0.4;
              }
              100% {
                opacity: 1;
              }
            }
          </style>
      </defs>
      <g id="iOS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Newsbot---Asking-for-News" transform="translate(-10.000000, -312.000000)">
              <g id="Chat" transform="translate(10.000000, -214.000000)">
                  <g id="Chat/Typing-Indicator" transform="translate(0.000000, 526.000000)">
                      <g id="Typing-Indicator">
                          <use id="Typing-indicator" stroke="#E4E9EC" mask="url(#mask-2)" stroke-width="2" fill="#FFFFFF" xlink:href="#path-1"></use>
                          <g id="Dots" transform="translate(18.000000, 13.000000)" fill="#54636D">
                              <circle class="dot" cx="3.5" cy="3.5" r="3.5"></circle>
                              <circle class="dot" cx="14.5" cy="3.5" r="3.5"></circle>
                              <circle class="dot" cx="25.5" cy="3.5" r="3.5"></circle>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>
  `,
    }}
  />
);

export default Chatbot;
