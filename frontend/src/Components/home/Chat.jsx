import React, { useState, useEffect } from "react";
import Navb from "./HomeNav";
import "../../styles/chat.css";

const businessChats = {
  "TechNova": [
    { id: 1, sender: "business", text: "Welcome to TechNova! How can we help?" },
  ],
  "CreativeBits": [
    { id: 1, sender: "business", text: "CreativeBits here. What do you need assistance with?" },
  ],
  "CloudCore": [
    { id: 1, sender: "business", text: "CloudCore support at your service!" },
  ],
};

const Chat = () => {
  
  const [currentBusiness, setCurrentBusiness] = useState("TechNova");
  const [messages, setMessages] = useState(businessChats[currentBusiness]);
  const [input, setInput] = useState("");

  const handleBusinessChange = (e) => {
    const selected = e.target.value;
    setCurrentBusiness(selected);
    setMessages(businessChats[selected]);
    setInput("");
  };

  const [newMessageId, setNewMessageId] = useState(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: messages.length + 1, sender: "user", text: input.trim() };

    setMessages((msgs) => [...msgs, newMsg]);
    setNewMessageId(newMsg.id);
    setInput("");
  };

  // After adding a new message, remove the 'new' class after the animation duration
  useEffect(() => {
    if (newMessageId === null) return;
    const timer = setTimeout(() => {
      setNewMessageId(null);
    }, 300); // matches CSS transition duration

    return () => clearTimeout(timer);
  }, [newMessageId]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <Navb />
      <main className="chat-container">
        <h1 className="chat-title">Chat with Businesses</h1>

        <div className="business-selector">
          <label htmlFor="business-select">Select Business:</label>
          <select
            id="business-select"
            value={currentBusiness}
            onChange={handleBusinessChange}
          >
            {Object.keys(businessChats).map((business) => (
              <option key={business} value={business}>
                {business}
              </option>
            ))}
          </select>
        </div>

        <div className="chat-window">
        {messages.map(({ id, sender, text }) => (
          <div
            key={id}
            className={`chat-message ${sender} ${id === newMessageId ? "new" : ""}`}
          >
            <p>{text}</p>
          </div>
        ))}
      </div>
        <div className="chat-input-area">
          <input
            type="text"
            placeholder={`Message ${currentBusiness}...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </main>
    </>
  );
};

export default Chat;
