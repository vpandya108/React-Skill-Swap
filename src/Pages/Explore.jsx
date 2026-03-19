import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function Explore() {
    <Navbar />
  const navigate = useNavigate();

  const users = [
    {
      name: "Rahul Sharma",
      teach: "Web Development",
      learn: "Data Science",
      badge: "Certified Developer",
    },
    {
      name: "Ananya Patel",
      teach: "Graphic Design",
      learn: "Public Speaking",
      badge: "Adobe Certified",
    },
    {
      name: "Alex Thomas",
      teach: "Photography",
      learn: "Video Editing",
      badge: "Professional Photographer",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Explore Skills
        </h1>

        <input
          type="text"
          placeholder="Search skills..."
          className="px-4 py-2 border rounded-lg w-64 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center"
          >

            <img
              src="https://via.placeholder.com/120"
              alt="profile"
              className="mx-auto rounded-full w-24 h-24 object-cover mb-4"
            />

            <h2 className="text-xl font-semibold">
              {user.name}
            </h2>

            <p className="text-green-600 font-medium mt-2">
              Teaches: {user.teach}
            </p>

            <p className="text-purple-600 font-medium">
              Wants: {user.learn}
            </p>

            <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {user.badge}
            </span>

            <div className="mt-5 flex justify-center gap-3">

              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Swap
              </button>

              <button
                onClick={() => navigate("/view-profile")}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Profile
              </button>

            </div>

          </div>
        ))}

      </div>
<Footer />
    </div>
  );
}

export default Explore;