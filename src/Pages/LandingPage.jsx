import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mt-6 px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="hero"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Empowering Growth through <br /> Knowledge Exchange
            </h1>
            <p className="mt-4 max-w-2xl text-sm md:text-lg">
              A global platform where professionals swap expertise to fuel
              mutual success and bridge the accessibility gap in learning.
            </p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Born from the belief that everyone has a skill worth sharing, Skill
            Swap bridges the gap between those who want to teach and those who
            want to learn. Our platform fosters a community of lifelong learners
            committed to professional excellence.
          </p>
          <p className="text-gray-700">
            We realized that the best mentorship often happens peer-to-peer. By
            removing the financial barriers to high-level education, we’ve
            created an ecosystem where value is measured in knowledge rather
            than currency.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="story"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-200 py-12">
        <div className="text-center mb-10">
          <h2 className="text-xl font-semibold">Core Values</h2>
          <p className="text-gray-600 text-sm">
            The principles that guide every interaction on our platform.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Community</h3>
            <p className="text-gray-600 text-sm">
              Building bridges between experts and learners globally. We believe
              we are stronger together.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Growth</h3>
            <p className="text-gray-600 text-sm">
              Prioritizing continuous personal and professional development
              through active knowledge sharing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Trust</h3>
            <p className="text-gray-600 text-sm">
              Ensuring a safe and reliable environment for every swap through
              verified profiles and community reviews.
            </p>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-blue-500 text-white text-center rounded-2xl p-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to start your journey?
          </h2>
          <p className="mt-3 text-sm md:text-base">
            Join thousands of professionals who are already swapping skills and
            growing their careers together.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-medium">
              Get Started Now
            </button>
            <button className="bg-blue-400 px-6 py-2 rounded-lg">
              Browse Skills
            </button>
          </div>
        </div>
      </div>
<Footer/>
    </div>
  );
}

export default LandingPage;