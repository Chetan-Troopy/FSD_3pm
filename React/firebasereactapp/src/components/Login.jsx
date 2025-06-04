import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      alert("Logged In!");
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setError("Incorrect Password");
      } else if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        {error && <p style={{color: "red"}}>{error}</p>}
        <input
          type="email"
          placeholder="Type Email Here"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Type Password Here"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
