import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-white shadow">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          About Skill Swap
        </h1>
        <p className="mt-4 text-gray-600">
          Empowering individuals through peer-to-peer knowledge exchange.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>

          <p className="text-gray-600 mb-4">
            Skill Swap is a collaborative learning platform where professionals
            exchange knowledge without financial barriers.
          </p>

          <p className="text-gray-600">
            We believe everyone has something valuable to teach and something
            exciting to learn.
          </p>
        </div>

        {/* Right */}
        <div>
          <img
            src="/story.jpg"
            alt="About"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

      </section>

      {/* Mission Section */}
      <section className="bg-gray-200 py-12">
        
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Mission
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Connect</h3>
            <p className="text-gray-600 text-sm">
              Connecting learners and experts worldwide.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Empower</h3>
            <p className="text-gray-600 text-sm">
              Empowering growth through shared expertise.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Grow</h3>
            <p className="text-gray-600 text-sm">
              Creating opportunities for mutual professional success.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;