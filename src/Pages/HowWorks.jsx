import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function HowWorks() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Master New Skills through Exchange
        </h1>
        <p className="mt-4 text-gray-600">
          Skill Swap connects experts and learners for mutual growth.
          No money, just pure knowledge sharing.
          Learn how you can start your journey today.
        </p>
      </section>

      {/* 4 Step Journey */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-10">
          The 4-Step Journey
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl mb-3">👤</div>
            <h3 className="font-semibold">1. Create Profile</h3>
            <p className="text-sm text-gray-600 mt-2">
              Set up your professional profile and tell the community who you are.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-semibold">2. List Skills</h3>
            <p className="text-sm text-gray-600 mt-2">
              Define your expertise and your learning goals clearly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="font-semibold">3. Find a Match</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get matched with the best partners for skill exchange.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold">4. Start Swapping</h3>
            <p className="text-sm text-gray-600 mt-2">
              Message, connect and begin your learning journey.
            </p>
          </div>

        </div>
      </section>

      {/* Why Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Skill-Swapping?
          </h2>
          <p className="text-gray-600">
            Traditional education costs a fortune. Experience is free when shared.
            Unlock your full potential through collaborative learning.
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-4">
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Zero Cost</h3>
            <p className="text-sm text-gray-600">
              Knowledge is the only currency you need.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Global Network</h3>
            <p className="text-sm text-gray-600">
              Connect with professionals worldwide.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Verified Experts</h3>
            <p className="text-sm text-gray-600">
              Peer-reviewed ratings ensure quality.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">True Community</h3>
            <p className="text-sm text-gray-600">
              Build lasting relationships.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-blue-500 text-white text-center rounded-2xl p-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to start your first swap?
          </h2>

          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-medium">
              Get Started Now
            </button>
            <button className="bg-blue-400 px-6 py-2 rounded-lg">
              Explore Skills
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HowWorks;