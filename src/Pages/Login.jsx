import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ Forgot password states
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);
  const [resetLink, setResetLink] = useState(""); // ✅ NEW

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id);
        alert("Login successful ✅");
        navigate("/HomeScreen");
      } else {
        setErrorMsg(data.message || "Invalid credentials ❌");
      }
    } catch (err) {
      setErrorMsg("Error connecting to server ❌");
    }
  };

  // ✅ UPDATED FORGOT PASSWORD HANDLER
  const handleForgotPassword = async () => {
    if (!forgotEmail) {
      setForgotMsg("Please enter your email ❌");
      return;
    }

    setForgotLoading(true);
    setForgotMsg("");
    setResetLink(""); // clear previous link

    try {
      const res = await fetch("http://localhost:5000/api/users/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });

      const data = await res.json();

      if (res.ok) {
        setForgotMsg("Link ready! Click below to reset:");
        setResetLink(data.resetLink); // ✅ save link
      } else {
        setForgotMsg(data.message || "Error ❌");
      }
    } catch (err) {
      setForgotMsg("Server error ❌");
    } finally {
      setForgotLoading(false);
    }
  };

  // ✅ Close modal and reset everything
  const handleCloseModal = () => {
    setShowForgot(false);
    setForgotMsg("");
    setForgotEmail("");
    setResetLink("");
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="login"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-10 text-white">
          <h1 className="text-3xl font-bold mb-4">Unlock your creative potential.</h1>
          <p className="text-sm max-w-md">
            Join millions of learners and creators to find what fascinates
            you and take the next step in your creative journey.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">

          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl text-blue-500">⇅</span>
            <h2 className="text-lg font-semibold">Skill Swap</h2>
          </div>

          <h1 className="text-2xl font-bold mb-2">Welcome</h1>
          <p className="text-gray-600 text-sm mb-6">Please enter your details to sign in.</p>

          <form onSubmit={handleLogin} className="space-y-4">

            {errorMsg && (
              <div className="bg-red-100 text-red-600 p-2 rounded text-sm">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <label className="font-medium">Password</label>
                <span
                  onClick={() => setShowForgot(true)}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Forgot Password?
                </span>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              <span>Keep me logged in</span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            >
              Log In →
            </button>

          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">OR LOG IN WITH</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100">
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <p className="text-sm text-center mt-6">
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>

      {/* ✅ FORGOT PASSWORD MODAL */}
      {showForgot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">

            <h2 className="text-xl font-bold mb-2">Forgot Password</h2>
            <p className="text-gray-500 text-sm mb-6">
              Enter your email to get a password reset link.
            </p>

            <input
              type="email"
              placeholder="name@company.com"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />

            {/* ✅ Success / Error message */}
            {forgotMsg && (
              <p className={`text-sm mb-3 ${
                forgotMsg.includes("✅") || forgotMsg.includes("ready")
                  ? "text-green-600"
                  : "text-red-500"
              }`}>
                {forgotMsg}
              </p>
            )}

            {/* ✅ Clickable Reset Link */}
            {resetLink && (
              
               <a href={resetLink}
                className="block text-center bg-green-600 text-white py-2 rounded-lg mb-4 hover:bg-green-700"
              >
                Click here to Reset Password →
              </a>
            )}

            <div className="flex gap-3">
              {/* ✅ Hide button after link is shown */}
              {!resetLink && (
                <button
                  onClick={handleForgotPassword}
                  disabled={forgotLoading}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {forgotLoading ? "Generating..." : "Get Reset Link"}
                </button>
              )}
              <button
                onClick={handleCloseModal}
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

export default Login;