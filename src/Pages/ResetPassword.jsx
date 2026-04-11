import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!password || !confirm) {
      setMsg("Please fill all fields ❌");
      return;
    }
    if (password !== confirm) {
      setMsg("Passwords do not match ❌");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/users/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      setMsg(data.message);

      if (res.ok) {
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      setMsg("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">

        <h1 className="text-2xl font-bold mb-2">Reset Password</h1>
        <p className="text-gray-500 text-sm mb-6">Enter your new password below.</p>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Confirm new password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {msg && (
          <p className={`text-sm mb-4 ${msg.includes("✅") ? "text-green-600" : "text-red-500"}`}>
            {msg}
          </p>
        )}

        <button
          onClick={handleReset}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Resetting..." : "Reset Password →"}
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;