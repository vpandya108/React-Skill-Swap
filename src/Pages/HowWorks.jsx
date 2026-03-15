import React from "react";
import "../Style/HowWorks.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function HowWorks() {
  return (
    <div className="howworks">
      <Navbar />

      {/* Hero Section */}
      <section className="top-section">
        <h1>Master New Skills through Exchange</h1>
        <p>
          Skill Swap connects experts and learners for mutual growth.
          No money, just pure knowledge sharing.
          Learn how you can start your journey today.
        </p>
      </section>

      {/* 4 Step Journey */}
      <section className="journey">

        <h2>The 4-Step Journey</h2>

        <div className="steps">

          <div className="step">
            <div className="circle">👤</div>
            <h3>1. Create Profile</h3>
            <p>
              Set up your professional profile. Tell the community who you are
              and what drives your passion.
            </p>
          </div>

          <div className="step">
            <div className="circle">📋</div>
            <h3>2. List Skills</h3>
            <p>
              Define your expertise and your learning goals.
              We match you based on what you give and take.
            </p>
          </div>

          <div className="step">
            <div className="circle">🔗</div>
            <h3>3. Find a Match</h3>
            <p>
              Our smart algorithm suggests the best partners to ensure
              high-quality knowledge sharing.
            </p>
          </div>

          <div className="step">
            <div className="circle">💬</div>
            <h3>4. Start Swapping</h3>
            <p>
              Message, schedule and begin your exchange.
              Level up your career together.
            </p>
          </div>

        </div>

      </section>

      {/* Why Skill Swapping */}
      <section className="why">

        <div className="why-left">
          <h2>Why Skill-Swapping?</h2>
          <p>
            Traditional education costs a fortune.
            Experience is free when shared.
            Unlock your full potential through collaborative learning.
          </p>
        </div>

        <div className="why-right">

          <div className="box">
            <h3>Zero Cost</h3>
            <p>Knowledge is the only currency you need.</p>
          </div>

          <div className="box">
            <h3>Global Network</h3>
            <p>Connect with professionals worldwide.</p>
          </div>

          <div className="box">
            <h3>Verified Experts</h3>
            <p>Peer-reviewed ratings ensure quality exchanges.</p>
          </div>

          <div className="box">
            <h3>True Community</h3>
            <p>Build lasting professional relationships.</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta">

        <h2>Ready to start your first swap?</h2>

        <div className="buttons">
          <button className="primary">Get Started Now</button>
          <button className="secondary">Explore Skills</button>
        </div>

      </section>
      <Footer/>
    </div>
  );
}

export default HowWorks;