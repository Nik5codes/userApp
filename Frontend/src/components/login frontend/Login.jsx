import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Get stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
 if (!storedUser) {
    // Case 1: No user has registered yet
    alert("⚠️ Please register first before logging in!");
    window.location.href = "/register";
  } else if (storedUser.email !== email) {
    // Case 2: Entered email is not registered
    alert("⚠️ This email is not registered. Please register first!");
    window.location.href = "/register";
  } else if (storedUser.password === password) {
    // Case 3: Email matches and password is correct
    alert("✅ Login successful!");
    window.location.href = "/";
  } else {
    // Case 4: Email matches but password is wrong
    alert("❌ Wrong password! Try again.");
  }
};

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-button">Log In</button>
      </form>

      <a href="/forgot-password" className="forget-pass-link">
        Forgot password?
      </a>

      <p className="auth-text">
        Don&apos;t have an account? <a href="/register">Register now</a>
      </p>
    </div>
  );
};

export default Login;
