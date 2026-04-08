import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Accountpage() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [saving, setSaving] = useState(false);

  const [editData, setEditData] = useState({
    name: "",
    bio: "",
    location: "",
    skillTeach: "",
    skillLearn: "",
  });

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const profileImg =
    "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg";

  // ✅ FETCH LOGGED IN USER DATA
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setUser(data);
        setEditData({
          name: data.name || "",
          bio: data.bio || "",
          location: data.location || "",
          skillTeach: data.skillTeach || "",
          skillLearn: data.skillLearn || "",
        });
      } catch (err) {
        console.log("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // ✅ HANDLE EDIT INPUT
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // ✅ SAVE PROFILE
  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`http://localhost:5000/api/users/update/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Error: " + (data.message || "Failed to update"));
        return;
      }

      setUser(data);        // ✅ update UI with new data
      setShowEdit(false);   // ✅ close modal
      alert("Profile updated ✅");
    } catch (err) {
      alert("Server error: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">My Profile</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowEdit(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <img
            src={user?.profilePhoto || profileImg}
            className="w-28 h-28 rounded-full mx-auto mb-3 object-cover"
            alt="Profile"
          />
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-500 text-sm">{user?.email}</p>
          <p className="text-gray-400 text-sm mt-1">{user?.location || "Location not set"}</p>
          <div className="flex justify-center mt-2 text-yellow-500">⭐ 4.8</div>

          <div className="flex justify-around mt-6 text-sm">
            <div>
              <p className="font-bold text-blue-600">{user?.swapRequests?.length || 0}</p>
              <p className="text-gray-500">Swaps</p>
            </div>
            <div>
              <p className="font-bold text-blue-600">95%</p>
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
              {user?.bio || "No bio added yet. Click Edit Profile to add one."}
            </p>
          </div>

          {/* SKILLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold mb-4 text-blue-600">Skills Offered</h3>
              <div className="bg-gray-100 p-3 rounded">
                {user?.skillTeach || "Not specified"}
                <span className="block text-xs text-blue-500">Primary Skill</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold mb-4 text-orange-500">Skills Wanted</h3>
              <div className="bg-gray-100 p-3 rounded">
                {user?.skillLearn || "Not specified"}
                <span className="block text-xs text-orange-500">Wants to Learn</span>
              </div>
            </div>

          </div>

          {/* ACTIVITY */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4">Recent Swap Requests</h3>
            {user?.swapRequests?.length > 0 ? (
              <ul className="text-sm text-gray-600 space-y-2">
                {user.swapRequests.slice(0, 5).map((req, i) => (
                  <li key={i}>
                    ✔ Swap request from <strong>{req.fromUserName}</strong> —{" "}
                    {req.skillOffered} ↔ {req.skillWanted}{" "}
                    <span className="text-xs text-blue-400">({req.status})</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">No swap requests yet.</p>
            )}
          </div>

        </div>
      </div>

      {/* ✅ EDIT PROFILE MODAL */}
      {showEdit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">

            <h2 className="text-xl font-bold mb-6">Edit Profile</h2>

            <div className="space-y-4">

              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Bio</label>
                <textarea
                  name="bio"
                  value={editData.bio}
                  onChange={handleChange}
                  rows={3}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  value={editData.location}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Skill I Can Teach</label>
                <input
                  type="text"
                  name="skillTeach"
                  value={editData.skillTeach}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Skill I Want to Learn</label>
                <input
                  type="text"
                  name="skillLearn"
                  value={editData.skillLearn}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
              <button
                onClick={() => setShowEdit(false)}
                className="flex-1 border py-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Accountpage;