import React from "react";
import "../Style/AboutUs.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function AboutUs() {
  return (
    <div>
        <Navbar/>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Skill Swap</h1>
          <p>
            Empowering individuals through peer-to-peer knowledge exchange.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="about-grid">

          <div>
            <h2>Who We Are</h2>

            <p>
              Skill Swap is a collaborative learning platform where
              professionals exchange knowledge without financial barriers.
            </p>

            <p>
              We believe everyone has something valuable to teach and
              something exciting to learn.
            </p>
          </div>

          <div>
            <img
              src="/story.jpg"
              alt="About"
              className="about-image"
            />
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="mission">

        <h2>Our Mission</h2>

        <div className="mission-cards">

          <div className="card">
            <h3>Connect</h3>
            <p>Connecting learners and experts worldwide.</p>
          </div>

          <div className="card">
            <h3>Empower</h3>
            <p>Empowering growth through shared expertise.</p>
          </div>

          <div className="card">
            <h3>Grow</h3>
            <p>Creating opportunities for mutual professional success.</p>
          </div>

        </div>

      </section>
<Footer/>
    </div>
  );
}

export default AboutUs;