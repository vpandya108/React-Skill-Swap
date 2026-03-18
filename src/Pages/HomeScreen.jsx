import React from "react";
import { Link } from "react-router-dom";

export default function HomeScren() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* NAVBAR */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          {/* LEFT MENU */}
          <div className="flex space-x-6 font-medium">
            <Link to="/explore" className="text-gray-700 hover:text-blue-600">Explore</Link>
            <Link to="/myswaps" className="text-gray-700 hover:text-blue-600">My Swaps</Link>
            <Link to="/messages" className="text-gray-700 hover:text-blue-600">Messages</Link>
          </div>

          {/* RIGHT ICON */}
          <div>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9 9 0 1118.88 17.8M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-8 py-6">

        {/* Welcome */}
        <div className="bg-blue-600 text-white rounded-xl p-10 mb-8">
          <h1 className="text-4xl font-bold mb-3">Welcome to Skill Swap, Vishva!</h1>
          <p className="text-lg mb-6">Ready to learn something new? Connect with experts around the world and share your passions.</p>
          <Link to="/explore" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">Start Learning</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2">

            {/* Active Swaps */}
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">My Active Swaps</h2>
                <Link to="/myswaps" className="text-blue-600 text-sm">View All</Link>
              </div>

              <div className="text-center py-12 text-gray-500">
                <div className="text-4xl mb-3">🤝</div>
                <p className="font-medium">No active swaps yet</p>
                <p className="text-sm mb-4">Start browsing categories to find your first match.</p>
                <Link to="/explore" className="bg-gray-200 px-4 py-2 rounded">Browse Skills</Link>
              </div>
            </div>

            {/* Recommended */}
            <h2 className="text-xl font-semibold mb-4">Recommended Skills for You</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {[
                {
                  title: "Digital Photography",
                  desc: "Learn manual settings, lighting, and composition.",
                  img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
                  user: "Sarah J."
                },
                {
                  title: "Python Programming",
                  desc: "Master automation and backend basics.",
                  img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
                  user: "David L."
                },
                {
                  title: "Vegan Cooking",
                  desc: "Learn plant-based recipes.",
                  img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                  user: "Elena R."
                },
                {
                  title: "Graphic Design",
                  desc: "Typography and branding skills.",
                  img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
                  user: "Marc T."
                }
              ].map((card, index) => (
                <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300">
                  <img src={card.img} className="rounded-t-xl h-40 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{card.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{card.desc}</p>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">{card.user}</span>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded">Swap</button>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* Skills */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">My Skills</h3>
              <div className="flex justify-between bg-gray-100 p-3 rounded mb-3">
                <span>Web Development</span>
                <Link to="/edit-skill">✏️</Link>
              </div>
              <Link to="/add-skill" className="border border-dashed w-full py-2 rounded text-gray-500 block text-center">+ Add New Skill</Link>
            </div>

            {/* Impact */}
            <div className="bg-gray-900 text-white p-6 rounded-xl">
              <h3 className="mb-4 font-semibold">Your Impact</h3>
              <div className="flex justify-between text-center">
                <div>
                  <p className="text-3xl font-bold">0</p>
                  <p className="text-sm text-gray-400">Skills Learned</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">1</p>
                  <p className="text-sm text-gray-400">Skills Offered</p>
                </div>
              </div>
            </div>

            {/* Recent */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Recent Swaps</h3>
              <p className="text-sm text-gray-500">Anna learned <span className="text-blue-600">Piano</span> from Lucas.</p>
              <p className="text-sm text-gray-500">Sam listed <span className="text-blue-600">Spanish</span>.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
