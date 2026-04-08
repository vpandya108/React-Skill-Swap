import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // stop page refresh
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token); // 🔐 save JWT
        localStorage.setItem("userId", data.user._id); // ✅ save user id
        alert("Login successful ✅");
        navigate("/HomeScreen"); // redirect to dashboard
      } else {
        setErrorMsg(data.message || "Invalid credentials ❌");
      }

    } catch (err) {
      console.log(err);
      setErrorMsg("Error connecting to server ❌");
    }
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
          <h1 className="text-3xl font-bold mb-4">
            Unlock your creative potential.
          </h1>
          <p className="text-sm max-w-md">
            Join millions of learners and creators to find what fascinates
            you and take the next step in your creative journey.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-6">
        
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl text-blue-500">⇅</span>
            <h2 className="text-lg font-semibold">Skill Swap</h2>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold mb-2">Welcome</h1>
          <p className="text-gray-600 text-sm mb-6">
            Please enter your details to sign in.
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            
            {errorMsg && (
              <div className="bg-red-100 text-red-600 p-2 rounded text-sm mb-4">
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
                <span className="text-blue-500 cursor-pointer hover:underline">
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

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">
              OR LOG IN WITH
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100">
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Signup */}
          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link to="/SignUp" className="text-blue-500 cursor-pointer hover:underline">
              Create an account
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;