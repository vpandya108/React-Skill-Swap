import React from "react";
import '../Style/LandingPage.css';
import Navbar from "../Component/Navbar";


function LandingPage() {
  return (
    <div>

      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Growth through Knowledge Exchange</h1>
          <p>
            A global platform where professionals swap expertise to fuel mutual success.
          </p>
          <button className="primary-btn">Join Our Mission</button>
        </div>
      </section>

      {/* Our Story */}
      <section className="story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Born from the belief that everyone has a skill worth sharing...
          </p>
        </div>

        <img src="/story.jpg" alt="story"/>
      </section>

      {/* Core Values */}
      <section className="values">

        <h2>Core Values</h2>

        <div className="cards">

          <div className="card">
            <h3>Community</h3>
            <p>Building bridges between experts and learners.</p>
          </div>

          <div className="card">
            <h3>Growth</h3>
            <p>Continuous personal development.</p>
          </div>

          <div className="card">
            <h3>Trust</h3>
            <p>Safe and reliable environment.</p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to start your journey?</h2>
        <p>Join thousands already swapping skills.</p>

        <div className="cta-buttons">
          <button className="start-btn">Get Started Now</button>
          <button className="browse-btn">Browse Skills</button>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;