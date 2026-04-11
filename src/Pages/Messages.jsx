import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Messages() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const token = localStorage.getItem("token");
  const myUserId = localStorage.getItem("userId");
  const bottomRef = useRef(null);

  const profileImg =
    "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg";

  // ✅ FETCH CONTACTS (accepted swap partners)
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/messages/contacts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        console.log("Error fetching contacts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  // ✅ FETCH MESSAGES when contact selected + poll every 3 sec
  useEffect(() => {
    if (!selectedContact) return;

    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/messages/conversation/${selectedContact._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.log("Error fetching messages:", err);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 3000); // poll every 3 sec
    return () => clearInterval(interval);

  }, [selectedContact]);

  // ✅ Auto scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ SEND MESSAGE
  const handleSend = async () => {
    if (!newMessage.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/api/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          receiverId: selectedContact._id,
          message: newMessage,
        }),
      });

      const data = await res.json();
      setMessages([...messages, data.data]); // add instantly
      setNewMessage(""); // clear input
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  // ✅ Send on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  // ✅ Filter contacts by search
  const filteredContacts = contacts.filter((c) =>
    c.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">

      {/* LEFT SIDEBAR */}
      <div className="w-80 bg-white border-r flex flex-col">

        {/* Profile Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <img
              src={profileImg}
              className="w-10 h-10 rounded-full mr-3 object-cover"
              alt="profile"
            />
            <div>
              <p className="font-semibold">My Messages</p>
              <p className="text-green-500 text-sm">Online</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/HomeScreen")}
            className="text-gray-500 text-sm hover:text-blue-600"
          >
            ← Home
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Contact List */}
        <div className="flex-1 overflow-y-auto px-3 space-y-2">

          {loading && (
            <p className="text-center text-gray-400 p-4">Loading...</p>
          )}

          {!loading && contacts.length === 0 && (
            <div className="text-center p-6 text-gray-400">
              <p className="text-3xl mb-2">💬</p>
              <p className="text-sm font-medium">No contacts yet</p>
              <p className="text-xs mt-1">Accept a swap request first!</p>
              <button
                onClick={() => navigate("/MySwap")}
                className="mt-3 text-blue-500 text-xs underline"
              >
                Go to My Swaps
              </button>
            </div>
          )}

          {filteredContacts.map((contact, index) => (
            <div
              key={index}
              onClick={() => setSelectedContact(contact)}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition ${
                selectedContact?._id === contact._id
                  ? "bg-blue-100 border-l-4 border-blue-500"
                  : "hover:bg-gray-100"
              }`}
            >
              <img
                src={contact.profilePhoto || profileImg}
                className="w-10 h-10 rounded-full mr-3 object-cover"
                alt="contact"
              />
              <div className="flex-1">
                <p className="font-semibold">{contact.name}</p>
                <p className="text-sm text-gray-500 truncate">
                  {contact.skillTeach || "SkillSwap Member"}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="p-4 border-t">
          <button
            onClick={() => navigate("/explore")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            + Find New Swap Partner
          </button>
        </div>

      </div>

      {/* RIGHT CHAT AREA */}
      <div className="flex-1 flex flex-col">

        {/* No contact selected */}
        {!selectedContact ? (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <p className="text-6xl mb-4">💬</p>
              <p className="text-xl font-medium">Select a contact to chat</p>
              <p className="text-sm mt-2">Your accepted swap partners appear on the left</p>
            </div>
          </div>
        ) : (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
              <div className="flex items-center">
                <img
                  src={selectedContact.profilePhoto || profileImg}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                  alt="contact"
                />
                <div>
                  <p className="font-semibold">{selectedContact.name}</p>
                  <p className="text-green-500 text-sm">● Active Now</p>
                </div>
              </div>

              <div className="flex gap-4 text-gray-600 text-xl">
                <button className="hover:text-blue-600">📞</button>
                <button className="hover:text-blue-600">🎥</button>
                <button className="hover:text-blue-600">🔍</button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 space-y-3 overflow-y-auto">

              {messages.length === 0 && (
                <p className="text-center text-gray-400 text-sm mt-10">
                  No messages yet. Say hello! 👋
                </p>
              )}

              {messages.map((msg, i) => {
                const isMine = msg.senderId === myUserId;
                return (
                  <div key={i}>
                    <div className={`flex ${isMine ? "justify-end" : "justify-start"} items-end gap-2`}>

                      {/* Other person avatar */}
                      {!isMine && (
                        <img
                          src={selectedContact.profilePhoto || profileImg}
                          className="w-8 h-8 rounded-full object-cover"
                          alt=""
                        />
                      )}

                      {/* Message bubble */}
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                          isMine
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-gray-200 text-gray-800 rounded-bl-none"
                        }`}
                      >
                        <p>{msg.message}</p>
                        <p className={`text-xs mt-1 ${isMine ? "text-blue-200" : "text-gray-400"}`}>
                          {new Date(msg.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                          {isMine && " ✓✓"}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}

              {/* Auto scroll anchor */}
              <div ref={bottomRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t bg-white flex items-center gap-3">
              <button className="text-xl hover:text-blue-600">➕</button>

              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-gray-100 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
              >
                ➤
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Messages;