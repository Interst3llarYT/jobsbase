import React, { useState, useEffect, useRef } from "react";
import BusinessNavbar from "../BusinessHome/BusinessNavbar.jsx";
import "../../styles/businessChat.css";

const conversations = [
  { id: 1, name: "Job Seeker A" },
  { id: 2, name: "Job Seeker B" },
  { id: 3, name: "Job Seeker C" },
];

export default function BusinessChat() {
  const [selectedConvId, setSelectedConvId] = useState(conversations[0].id);
  const [messages, setMessages] = useState({
    1: [
      { sender: "them", text: "Hi, I am interested in the job you posted." },
      { sender: "me", text: "Great! Let's schedule an interview." },
    ],
    2: [{ sender: "them", text: "Can you tell me more about the benefits?" }],
    3: [],
  });
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, selectedConvId]);

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => ({
      ...prev,
      [selectedConvId]: [...(prev[selectedConvId] || []), { sender: "me", text: input }],
    }));
    setInput("");
  }

  return (
    <>
      <BusinessNavbar />
      <div className="business-chat-container">
        <aside className="business-chat-sidebar">
          <h2>Conversations</h2>
          <ul>
            {conversations.map(({ id, name }) => (
              <li key={id}>
                <button
                  className={id === selectedConvId ? "active" : ""}
                  onClick={() => setSelectedConvId(id)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="business-chat-window">
          <header className="business-chat-header">
            Chat with {conversations.find((c) => c.id === selectedConvId)?.name}
          </header>

          <div className="chat-messages">
            {(messages[selectedConvId] || []).map((msg, i) => (
              <div
                key={i}
                className={`chat-message ${msg.sender === "me" ? "me" : "them"}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="chat-input-form">
            <input
              className="chat-input"
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="chat-send-btn">
              Send
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
