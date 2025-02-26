import React from "react";
import "../styles/WelcomeBack/WelcomeBack.css";

import DailyDevLogo from "../components/DailyDevLogo/DailyDevLogo";
import userAvatar from "../images/userAvatar.png";
import googleLogo from "../images/googleLogo.png";
import Footer from "../components/onboarding/Footer";

const WelcomeBack = () => {
  return (
    <div className="WelcomeBack-container">
      <header className="login-header">
        <img
          src={DailyDevLogo}
          alt="Daily Dev Logo"
          className="dailydev-logo"
        />
      </header>
      <main className="WelcomeBack-content">
        <h1>Welcome back!</h1>
        <p>Log in to access your account</p>
        <div className="user-info">
          <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          <p>finafa599@gmail.com</p>
        </div>
        <button className="WelcomeBack-button">
          <img src={googleLogo} alt="Google Logo" className="google-logo" />
          Continue as Martial
          <p>finafa599@gmail.com</p>
        </button>
        <p className="switch-account">
          Not you? <a href="#hjjkk">Use another account</a>
        </p>
        <p className="sign-up">
          Don't have an account? <a href="/onboarding/signup">Sign up</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default WelcomeBack;
