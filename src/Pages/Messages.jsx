import React, { useState } from "react";

function Messages() {
  const [selectedChat, setSelectedChat] = useState("Sarah Milaar");

  const chats = [
    {
      name: "Sarah Milaar",
      msg: "The final design looks great...",
      time: "12:45 PM",
      img: "https://i.pravatar.cc/41",
    },
    {
      name: "Design Team",
      msg: "Jordan: I've edited Figma files...",
      time: "11:30 PM",
      img: "https://i.pravatar.cc/42",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">

      {/* LEFT SIDEBAR */}
      <div className="w-80 bg-white border-r flex flex-col">

        {/* Profile */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <img src="https://i.pravatar.cc/40" className="rounded-full mr-3" />
            <div>
              <p className="font-semibold">John D'cruz</p>
              <p className="text-green-500 text-sm">Online</p>
            </div>
          </div>
          <button className="text-gray-500 text-xl">⋮</button>
        </div>

        {/* Search */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search Messages..."
            className="w-full bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto px-3 space-y-2">

          {chats.map((chat, index) => (
            <div
              key={index}
              onClick={() => setSelectedChat(chat.name)}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition ${
                selectedChat === chat.name
                  ? "bg-blue-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <img
                src={chat.img}
                className="w-10 h-10 rounded-full mr-3"
                alt=""
              />

              <div className="flex-1">
                <p className="font-semibold">{chat.name}</p>
                <p className="text-sm text-gray-500 truncate">
                  {chat.msg}
                </p>
              </div>

              <span className="text-xs text-gray-400">
                {chat.time}
              </span>
            </div>
          ))}

        </div>

        {/* New Message Button */}
        <div className="p-4 border-t">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            + New Message
          </button>
        </div>

      </div>

      {/* RIGHT CHAT AREA */}
      <div className="flex-1 flex flex-col">

        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center">
            <img
              src="https://i.pravatar.cc/41"
              className="w-10 h-10 rounded-full mr-3"
              alt=""
            />

            <div>
              <p className="font-semibold">{selectedChat}</p>
              <p className="text-green-500 text-sm">Active Now</p>
            </div>
          </div>

          <div className="flex gap-4 text-gray-600 text-xl">
            <button className="hover:text-blue-600">📞</button>
            <button className="hover:text-blue-600">🎥</button>
            <button className="hover:text-blue-600">🔍</button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">

          {/* Incoming */}
          <div className="flex items-start gap-2">
            <img
              src="https://i.pravatar.cc/41"
              className="w-8 h-8 rounded-full"
              alt=""
            />

            <div className="bg-gray-200 p-3 rounded-xl max-w-md text-sm">
              Hey! Have you seen the latest UI components I shared this morning?
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs">10:15 AM</p>

          {/* Outgoing */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white p-3 rounded-xl max-w-md text-sm shadow">
              Not yet, just getting started on my reviews. Send me the link again just in case?
            </div>
          </div>

          <p className="text-right text-gray-400 text-xs">10:16 AM ✓✓</p>

        </div>

        {/* Message Input */}
        <div className="p-4 border-t bg-white flex items-center gap-3">

          <button className="text-xl hover:text-blue-600">➕</button>

          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700">
            ➤
          </button>
        </div>

      </div>

    </div>
  );
}

export default Messages;