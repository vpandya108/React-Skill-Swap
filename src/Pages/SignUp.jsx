
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import ProfileCreate from "./ProfileCreate";
import { FaUser, FaEnvelope, FaLock, FaGraduationCap } from "react-icons/fa";

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault(); // stop page refresh
    // You can add validation here later
    navigate("/ProfileCreate"); // redirect to profile creation page
  };

  return (
    <div className="min-h-screen flex">
      
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 relative bg-gradient-to-br from-green-900 via-black to-green-800 text-white p-10 flex-col justify-center">
        
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">
          ◇ SkillSwap
        </h2>

        <h1 className="text-4xl font-bold leading-tight mb-4">
          Master New <span className="text-blue-500">Skills</span> Today.
        </h1>

        <p className="text-gray-300 mb-8 max-w-md">
          Join over 500,000+ professionals learning, sharing, and growing their
          careers on the world's most innovative platform.
        </p>

        <div className="flex gap-4">
          
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
            <h3 className="font-semibold">Expert Instructors</h3>
            <p className="text-sm text-gray-300">
              Learn from industry leaders
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
            <h3 className="font-semibold">Global Community</h3>
            <p className="text-sm text-gray-300">
              Connect with peers worldwide
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-6">
        
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">

          <h1 className="text-3xl font-bold mb-2">
            Join the community
          </h1>

          <p className="text-gray-600 text-sm mb-6">
            Start your learning journey with Skill Swap today
          </p>

          {/* FORM */}
          <form onSubmit={handleSignUp} className="space-y-4">
            
            {/* Name */}
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Skill */}
            <div>
              <label className="text-sm font-medium">Primary Skill</label>
              <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
                <FaGraduationCap className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Select your area of expertise"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-2">
              Create Account →
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">
              Or Sign up with
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100">
            <FcGoogle size={20} />
            Google
          </button>

          {/* Login link */}
          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              login here
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default SignUp;