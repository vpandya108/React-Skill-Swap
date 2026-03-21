import React from "react";

function Accountpage() {
  const user = {
    name: "Vishva Pandya",
    email: "vishva@email.com",
    skill: "Web Development",
    location: "India",
    rating: "4.8",
    swaps: 12,
    response: "95%",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">My Profile</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Edit Profile
        </button>
      </div>

      {/* Main Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-xl shadow p-6 text-center">

          <img
            src="https://i.pravatar.cc/120"
            className="w-28 h-28 rounded-full mx-auto mb-3"
            alt=""
          />

          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>

          <p className="text-gray-400 text-sm mt-1">{user.location}</p>

          <div className="flex justify-center mt-2 text-yellow-500">
            ⭐ {user.rating}
          </div>

          {/* Stats */}
          <div className="flex justify-around mt-6 text-sm">
            <div>
              <p className="font-bold text-blue-600">{user.swaps}</p>
              <p className="text-gray-500">Swaps</p>
            </div>

            <div>
              <p className="font-bold text-blue-600">{user.response}</p>
              <p className="text-gray-500">Response</p>
            </div>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* ABOUT */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">About Me</h3>
            <p className="text-gray-600 text-sm">
              Passionate developer who loves building web applications and learning new technologies. 
              I enjoy teaching and exchanging skills with others.
            </p>
          </div>

          {/* SKILLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Skills Offered */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold mb-4 text-blue-600">
                Skills Offered
              </h3>

              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded">
                  {user.skill}
                  <span className="block text-xs text-blue-500">
                    Expert
                  </span>
                </div>

                <div className="bg-gray-100 p-3 rounded">
                  JavaScript
                  <span className="block text-xs text-blue-500">
                    Intermediate
                  </span>
                </div>
              </div>
            </div>

            {/* Skills Wanted */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold mb-4 text-orange-500">
                Skills Wanted
              </h3>

              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded">
                  UI/UX Design
                  <span className="block text-xs text-orange-500">
                    Beginner
                  </span>
                </div>

                <div className="bg-gray-100 p-3 rounded">
                  Public Speaking
                  <span className="block text-xs text-orange-500">
                    Intermediate
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ACTIVITY */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4">Recent Activity</h3>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ Completed swap with Rahul (Python ↔ Guitar)</li>
              <li>✔ Sent request to Ananya (Design ↔ Speaking)</li>
              <li>✔ Updated profile skills</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Accountpage;