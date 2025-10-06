import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService"; // from the Firebase Auth service we built earlier

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = React.useState("idle"); // "idle" | "submitting"
  const [error, setError] = React.useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.fromPage || "/host";

  // ✅ handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // ✅ handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const result = await loginUser(loginFormData);

      if (result.success) {
        localStorage.setItem("loggedin", "true");
        navigate(fromPage, { replace: true });
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error("Unexpected login error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginFormData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginFormData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}
