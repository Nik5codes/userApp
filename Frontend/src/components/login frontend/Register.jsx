import React, { useState } from "react";
import "./Login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    // Save user in localStorage
    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("✅ Registration successful! Please log in.");
    window.location.href = "/login"; // redirect to login page
   // navigator("/login");
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <form className="auth-form" onSubmit={handleRegister}>
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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-button">Register</button>
      </form>

      <p className="auth-text">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
