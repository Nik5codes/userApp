import React, { useState } from "react";
import "./Login.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    // Later: send API call with axios + token
    alert("✅ Password has been reset successfully!");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Reset Password</h2>
      <form className="auth-form" onSubmit={handleReset}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
