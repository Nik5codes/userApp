import React, { useState } from "react";
import "./Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("⚠️ No user registered yet. Please register first.");
      window.location.href = "/register";
    } else if (storedUser.email !== email) {
      alert("⚠️ This email is not registered.");
    } else {
      // ✅ Instead of showing link, simulate email being sent
      alert(`📩 A password reset link has been sent to your email: ${email}`);
      // In real app: call backend API to send email securely
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Forgot Password</h2>
      <form className="auth-form" onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="auth-button">
          Send Reset Link
        </button>
      </form>

      <p className="auth-text">
        Remembered your password? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default ForgotPassword;
