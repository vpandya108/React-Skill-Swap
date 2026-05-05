import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function NotificationBell() {
  const [count, setCount] = useState(0);
  const [requests, setRequests] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  // ✅ FETCH NOTIFICATIONS
  const fetchNotifications = async () => {
    if (!token || !userId) return;
    try {
      const res = await fetch(`http://localhost:5000/api/users/notifications/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setCount(data.count);
      setRequests(data.requests);
    } catch (err) {
      console.log("Notification error:", err);
    }
  };

  // ✅ POLL EVERY 30 SECONDS
  useEffect(() => {
    fetchNotifications(); // run immediately
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval); // cleanup
  }, []);

  // ✅ MARK AS SEEN WHEN DROPDOWN OPENS
  const handleBellClick = async () => {
    setShowDropdown(!showDropdown);

    if (!showDropdown && count > 0) {
      try {
        await fetch(`http://localhost:5000/api/users/notifications/seen/${userId}`, {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        });
        setCount(0); // clear badge
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="relative">

      {/* 🔔 BELL ICON */}
      <button onClick={handleBellClick} className="relative text-gray-700 hover:text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>

        {/* 🔴 RED BADGE */}
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {count}
          </span>
        )}
      </button>

      {/* 📋 DROPDOWN */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl z-50 border">

          <div className="p-4 border-b font-semibold text-gray-700">
            🔔 Notifications
          </div>

          {requests.length === 0 ? (
            <p className="text-gray-400 text-sm text-center p-4">
              No new notifications
            </p>
          ) : (
            <ul>
              {requests.slice(0, 5).map((req, i) => (
                <li
                  key={i}
                  onClick={() => { navigate("/MySwap"); setShowDropdown(false); }}
                  className="p-4 hover:bg-gray-50 cursor-pointer border-b text-sm"
                >
                  <p className="font-medium">
                    🤝 <strong>{req.fromUserName}</strong> sent you a swap request!
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Offers: {req.skillOffered} → Wants: {req.skillWanted}
                  </p>
                  <span className="text-xs text-orange-400 font-medium">
                    {req.status}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div
            onClick={() => { navigate("/MySwap"); setShowDropdown(false); }}
            className="p-3 text-center text-blue-600 text-sm cursor-pointer hover:bg-gray-50"
          >
            View All Swaps →
          </div>

        </div>
      )}
    </div>
  );
}

export default NotificationBell;
