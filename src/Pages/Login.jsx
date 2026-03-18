import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // stop page refresh

    // You can add validation here later

    navigate("/HomeScreen"); // redirect to dashboard
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
            
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
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
                placeholder="••••••••"
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
            <span className="text-blue-500 cursor-pointer hover:underline">
              Create an account
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;