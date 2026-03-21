import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Explore() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("All Skills");

  const users = [
    {
      name: "Elena Rodriguez",
      role: "Senior Product Designer",
      teach: "UI/UX Design",
      learn: "React.js Basics",
    },
    {
      name: "Marcus Chen",
      role: "Full-stack Engineer",
      teach: "System Architecture",
      learn: "Mandarin Chinese",
    },
    {
      name: "Sarah Jenkins",
      role: "Content Strategist",
      teach: "Copywriting",
      learn: "Photography",
    },
    {
      name: "David Okafor",
      role: "Digital Artist",
      teach: "Concept Art",
      learn: "Python Scripting",
    },
    {
      name: "Lisa Verma",
      role: "Marketing Lead",
      teach: "SEO Strategy",
      learn: "French",
    },
    {
      name: "Alex Thompson",
      role: "Data Analyst",
      teach: "Excel Mastery",
      learn: "Public Speaking",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold text-blue-600 mb-6">
          SkillSwap
        </h2>

        <ul className="space-y-4 text-gray-600">
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-blue-600"
          >
            Home
          </li>

          <li
            onClick={() => navigate("/explore")}
            className="cursor-pointer hover:text-blue-600"
          >
            Discover
          </li>

          <li
            onClick={() => navigate("/network")}
            className="cursor-pointer hover:text-blue-600"
          >
            Network
          </li>

          <li
            onClick={() => navigate("/settings")}
            className="cursor-pointer hover:text-blue-600"
          >
            Settings
          </li>

          <li
            onClick={() => navigate("/help")}
            className="cursor-pointer hover:text-blue-600"
          >
            Help
          </li>
        </ul>

        <button
          onClick={() => navigate("/post-skill")}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Post a Skill
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">

        {/* TOP NAV */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Explore Opportunities</h1>

          <div className="space-x-6 text-gray-600">
            <span className="text-blue-600 font-medium cursor-pointer">
              Explore
            </span>

            <span
              onClick={() => navigate("/messages")}
              className="cursor-pointer hover:text-blue-600"
            >
              Messages
            </span>

            <span
              onClick={() => navigate("/myswap")}
              className="cursor-pointer hover:text-blue-600"
            >
              My Swaps
            </span>
          </div>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search skills, industries, or experts..."
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-400"
        />

        {/* FILTERS */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {["All Skills", "Tech", "Design", "Language", "Music", "Art", "Marketing"].map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(item)}
              className={`px-4 py-1 rounded-full text-sm ${
                activeFilter === item
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >

              <div className="flex items-center gap-3 mb-3">
                <img
                  src={`https://i.pravatar.cc/40?img=${index + 10}`}
                  className="rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>

              {/* TEACH */}
              <p className="text-xs text-gray-400">I CAN TEACH</p>
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded mt-1 inline-block text-sm">
                {user.teach}
              </div>

              {/* LEARN */}
              <p className="text-xs text-gray-400 mt-3">I WANT TO LEARN</p>
              <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded mt-1 inline-block text-sm">
                {user.learn}
              </div>

              {/* BUTTONS */}
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => navigate("/ViewProfile", { state: { user } })}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  View Profile
                </button>

                <button
                  onClick={() => alert(`Swap request sent to ${user.name}`)}
                  className="w-full border py-2 rounded text-gray-600 hover:bg-gray-100"
                >
                  Send Swap Request
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Explore;