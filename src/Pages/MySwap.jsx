import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";

function MySwap() {
  const navigate = useNavigate();

  const [swapRequests, setSwapRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const profileImg =
    "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg";

  // ✅ FETCH SWAP REQUESTS
  const fetchSwapRequests = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/swap-requests/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setSwapRequests(data);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSwapRequests();
  }, []);

  // ✅ ACCEPT REQUEST
  const handleAccept = async (requestId) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/users/swap-request/accept/${userId}/${requestId}`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      alert(data.message);
      fetchSwapRequests(); // refresh
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  // ✅ DECLINE REQUEST
  const handleDecline = async (requestId) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/users/swap-request/decline/${userId}/${requestId}`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      alert(data.message);
      fetchSwapRequests(); // refresh
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  // ✅ SPLIT BY STATUS
  const pending   = swapRequests.filter((r) => r.status === "pending");
  const accepted  = swapRequests.filter((r) => r.status === "accepted");
  const declined  = swapRequests.filter((r) => r.status === "declined");

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading swaps...</p>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1">

        {/* SIDEBAR */}
        <div className="w-64 bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-10">SkillSwap</h2>
          <ul className="space-y-4">
            <li onClick={() => navigate("/")} className="text-gray-600 hover:text-green-600 cursor-pointer">Dashboard</li>
            <li className="bg-green-100 text-green-700 px-3 py-2 rounded-lg font-semibold">My Swaps</li>
            <li onClick={() => navigate("/account")} className="text-gray-600 hover:text-green-600 cursor-pointer">Profile</li>
            <li onClick={() => navigate("/messages")} className="text-gray-600 hover:text-green-600 cursor-pointer">Messages</li>
            <li onClick={() => navigate("/explore")} className="text-gray-600 hover:text-green-600 cursor-pointer">Find a Skill</li>
          </ul>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">My Swaps</h1>

          {/* ✅ ACTIVE (ACCEPTED) SWAPS */}
          <h2 className="text-xl font-semibold mb-4">Active Swaps</h2>
          {accepted.length === 0 ? (
            <p className="text-gray-400 mb-6">No active swaps yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {accepted.map((swap, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">
                      {swap.skillOffered} ↔ {swap.skillWanted}
                    </h3>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      In Progress
                    </span>
                  </div>

                  <div className="flex items-center mt-4">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-12 h-12 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <p className="font-medium">{swap.fromUserName}</p>
                      <p className="text-sm text-gray-500">Accepted swap</p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div className="bg-green-500 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ✅ PENDING REQUESTS */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Pending Requests</h2>
          {pending.length === 0 ? (
            <p className="text-gray-400 mb-6">No pending requests.</p>
          ) : (
            <div className="space-y-4 mb-6">
              {pending.map((req, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-medium">
                        <strong>{req.fromUserName}</strong> wants to swap
                      </p>
                      <p className="text-sm text-gray-500">
                        Offers: {req.skillOffered} → Wants: {req.skillWanted}
                      </p>
                    </div>
                  </div>

                  <div className="space-x-2">
                    <button
                      onClick={() => handleAccept(req._id)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDecline(req._id)}
                      className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ✅ COMPLETED / DECLINED */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Completed Swaps</h2>
          {declined.length === 0 && accepted.length === 0 ? (
            <p className="text-gray-400">No completed swaps yet.</p>
          ) : (
            <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
              <table className="w-full">
                <thead className="text-left text-gray-500 text-sm">
                  <tr>
                    <th className="pb-3">Skill Partner</th>
                    <th>Swapped Skills</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[...accepted, ...declined].map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-3">{item.fromUserName}</td>
                      <td>{item.skillOffered} ↔ {item.skillWanted}</td>
                      <td>
                        <span className={`px-3 py-1 rounded text-white text-xs ${
                          item.status === "accepted" ? "bg-green-500" : "bg-red-400"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MySwap;