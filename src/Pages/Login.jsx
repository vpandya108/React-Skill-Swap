import React from "react";
import "../Style/Login.css";

function Login() {
  return (
    <div className="login-container">

      {/* Left Image Section */}
      <div className="login-left">
        <div className="overlay-text">
          <h1>Unlock your creative potential.</h1>
          <p>
            Join millions of learners and creators to find what fascinates
            you and take the next step in your creative journey.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="login-right">

        <div className="logo">
          <span className="logo-icon">⇅</span>
          <h2>Skill Swap</h2>
        </div>

        <h1>Welcome</h1>
        <p>Please enter your details to sign in.</p>

        <form className="login-form">

          <label>Email Address</label>
          <input type="email" placeholder="name@company.com" />

          <div className="password-row">
            <label>Password</label>
            <span className="forgot">Forget Password?</span>
          </div>

          <input type="password" placeholder="••••••••" />

          <div className="remember">
            <input type="checkbox" />
            <span>Keep me logged in</span>
          </div>

          <button className="login-btn">Log In →</button>

        </form>

        <div className="divider">
          <span>OR LOG IN WITH</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="signup-text">
          Don’t have an account? <span>Create an account</span>
        </p>

      </div>

    </div>
  );
}

export default Login;