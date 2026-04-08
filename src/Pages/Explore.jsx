import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Explore() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("All Skills");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ NEW

  const profileImg =
    "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg";

  const token = localStorage.getItem("token");
  const myUserId = localStorage.getItem("userId");

  // ✅ FETCH REAL USERS FROM BACKEND
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users");
        const data = await res.json();
        const filtered = data.filter((u) => u._id !== myUserId);
        setUsers(filtered);
      } catch (err) {
        console.log("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // ✅ SEARCH + FILTER LOGIC
  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();

    // Search across name, skillTeach, skillLearn, bio
    const matchesSearch =
      user.name?.toLowerCase().includes(query) ||
      user.skillTeach?.toLowerCase().includes(query) ||
      user.skillLearn?.toLowerCase().includes(query) ||
      user.bio?.toLowerCase().includes(query);

    // Category filter
    const categoryMap = {
      "All Skills": true,
      Tech: ["react", "node", "python", "javascript", "coding", "programming", "system", "data", "ai", "ml"],
      Design: ["ui", "ux", "design", "figma", "art", "graphic", "concept"],
      Language: ["english", "french", "spanish", "mandarin", "hindi", "german", "japanese"],
      Music: ["music", "guitar", "piano", "singing", "drums", "violin"],
      Art: ["art", "painting", "drawing", "illustration", "photography"],
      Marketing: ["marketing", "seo", "content", "copywriting", "social media", "ads"],
    };

    let matchesFilter = true;
    if (activeFilter !== "All Skills") {
      const keywords = categoryMap[activeFilter];
      matchesFilter = keywords.some(
        (kw) =>
          user.skillTeach?.toLowerCase().includes(kw) ||
          user.skillLearn?.toLowerCase().includes(kw)
      );
    }

    return matchesSearch && matchesFilter;
  });

  // ✅ SEND SWAP REQUEST
  const handleSwapRequest = async (userId, userName) => {
    if (!token) {
      alert("Please login first ❌");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/users/swap-request/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            skillOffered: "My Skill",
            skillWanted: "Their Skill",
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert("Error: " + (data.message || "Failed to send request"));
        return;
      }

      alert(`Swap request sent to ${userName} ✅`);
    } catch (err) {
      alert("Server error: " + err.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold text-blue-600 mb-6">SkillSwap</h2>

        <ul className="space-y-4 text-gray-600">
          <li onClick={() => navigate("/")} className="cursor-pointer hover:text-blue-600">Home</li>
          <li onClick={() => navigate("/explore")} className="cursor-pointer hover:text-blue-600">Discover</li>
          <li onClick={() => navigate("/network")} className="cursor-pointer hover:text-blue-600">Network</li>
          <li onClick={() => navigate("/settings")} className="cursor-pointer hover:text-blue-600">Settings</li>
          <li onClick={() => navigate("/help")} className="cursor-pointer hover:text-blue-600">Help</li>
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
            <span className="text-blue-600 font-medium cursor-pointer">Explore</span>
            <span onClick={() => navigate("/messages")} className="cursor-pointer hover:text-blue-600">Messages</span>
            <span onClick={() => navigate("/myswap")} className="cursor-pointer hover:text-blue-600">My Swaps</span>
          </div>
        </div>

        {/* ✅ SEARCH INPUT */}
        <input
          type="text"
          placeholder="Search skills, industries, or experts..."
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* FILTERS */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {["All Skills", "Tech", "Design", "Language", "Music", "Art", "Marketing"].map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(item)}
              className={`px-4 py-1 rounded-full text-sm ${
                activeFilter === item ? "bg-black text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading && <p className="text-center text-gray-500">Loading users...</p>}

        {/* ✅ NO RESULTS MESSAGE */}
        {!loading && filteredUsers.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No users found for "<strong>{searchQuery}</strong>" 😕
          </p>
        )}

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

              <div className="flex items-center gap-3 mb-3">
                <img
                  src={user.profilePhoto || profileImg}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-xs text-gray-500">{user.bio || "SkillSwap Member"}</p>
                </div>
              </div>

              {/* TEACH */}
              <p className="text-xs text-gray-400">I CAN TEACH</p>
              <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded mt-1 inline-block text-sm">
                {user.skillTeach || "Not specified"}
              </div>

              {/* LEARN */}
              <p className="text-xs text-gray-400 mt-3">I WANT TO LEARN</p>
              <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded mt-1 inline-block text-sm">
                {user.skillLearn || "Not specified"}
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
                  onClick={() => handleSwapRequest(user._id, user.name)}
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