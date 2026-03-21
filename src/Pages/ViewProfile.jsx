import React from "react";
import { useLocation } from "react-router-dom";

function ViewProfile() {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <h2 className="p-10 text-xl">No User Data Found</h2>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* Top Navbar */}
      <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-blue-600">SkillSwap</h1>

        <div className="space-x-6 text-gray-600">
          <span className="font-medium text-blue-600">Explore</span>
          <span className="hover:text-blue-600 cursor-pointer">My Swaps</span>
          <span className="hover:text-blue-600 cursor-pointer">Messages</span>
          <span className="hover:text-blue-600 cursor-pointer">Profile</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-xl shadow p-6 text-center">

          <img
            src="https://i.pravatar.cc/100"
            alt=""
            className="mx-auto rounded-full w-24 h-24 mb-3"
          />

          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-gray-500 text-sm">SkillSwap Member</p>

          <div className="flex justify-center gap-2 mt-2 text-sm text-yellow-500">
            ⭐ 4.8
          </div>

          <p className="text-gray-400 text-sm mt-1">India</p>

          <button className="bg-blue-600 text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-700">
            Send Swap Request
          </button>

          <button className="border w-full mt-2 py-2 rounded-lg text-gray-600">
            Message
          </button>

          <div className="flex justify-between mt-6 text-sm">
            <div>
              <p className="font-bold text-blue-600">42</p>
              <p className="text-gray-500">Swaps</p>
            </div>

            <div>
              <p className="font-bold text-blue-600">98%</p>
              <p className="text-gray-500">Response</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* ABOUT */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-2">
              About {user.name}
            </h2>

            <p className="text-gray-600 text-sm">
              Passionate learner and teacher. Interested in sharing knowledge and growing together through skill exchange platforms like SkillSwap.
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
                  {user.teach}
                  <span className="block text-xs text-blue-500">
                    Expert
                  </span>
                </div>

                <div className="bg-gray-100 p-3 rounded">
                  Communication
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
                  {user.learn}
                  <span className="block text-xs text-orange-500">
                    Beginner
                  </span>
                </div>

                <div className="bg-gray-100 p-3 rounded">
                  UI/UX Design
                  <span className="block text-xs text-orange-500">
                    Intermediate
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* REVIEWS */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4">Recent Reviews</h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/40"
                  className="rounded-full"
                />

                <div>
                  <p className="font-medium">Marcus Chen</p>
                  <p className="text-sm text-gray-500">
                    Great experience learning together!
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/41"
                  className="rounded-full"
                />

                <div>
                  <p className="font-medium">Elena Rodriguez</p>
                  <p className="text-sm text-gray-500">
                    Very professional and helpful.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ViewProfile;