import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/profile");
    } else {
      setError("INVALID USERNAME OR PASSWORD");
    }
  };

  return (
    <div className="login-page">

      {/* Background decoration */}
      <div className="bg-circle circle-one" />
      <div className="bg-circle circle-two" />

      {/* Main Login */}
      <div className="login-container">

        {/* Left Side */}
        <div className="login-intro">

          <div className="intro-line" />

          <span className="intro-small">
            TYPE-MOON
          </span>

          <h1>
            CHARACTER
            <br />
            <span>ARCHIVE</span>
          </h1>

          <p>
            SERVANT DATABASE
          </p>

          <div className="intro-info">
            <span>DATABASE</span>
            <strong>#418</strong>
          </div>

        </div>


        {/* Login Card */}
        <div className="login-card">

          {/* Header */}
          <div className="login-header">

            <div className="login-symbol">
              C
            </div>

            <div>
              <span>
                AUTHENTICATION
              </span>

              <h2>
                Welcome Back
              </h2>
            </div>

          </div>


          <div className="header-line" />


          {/* Form */}
          <form onSubmit={handleLogin}>

            {/* Username */}
            <div className="input-group">

              <label>
                USERNAME
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ◈
                </span>

                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                  autoComplete="username"
                />

              </div>

            </div>


            {/* Password */}
            <div className="input-group">

              <label>
                PASSWORD
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ◆
                </span>

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  autoComplete="current-password"
                />

              </div>

            </div>


            {/* Error */}
            {error && (
              <div className="login-error">
                <span>!</span>
                {error}
              </div>
            )}


            {/* Login Button */}
            <button
              className="login-button"
              type="submit"
            >
              <span>
                ENTER DATABASE
              </span>

              <strong>
                →
              </strong>
            </button>

          </form>


          {/* Demo Account */}
          <div className="demo-account">

            <div className="demo-title">
              DEMO ACCESS
            </div>

            <div className="demo-row">
              <span>USERNAME</span>
              <strong>admin</strong>
            </div>

            <div className="demo-row">
              <span>PASSWORD</span>
              <strong>1234</strong>
            </div>

          </div>


          {/* Footer */}
          <div className="login-footer">
            <span>
              SECURE SERVANT DATABASE
            </span>

            <span>
              © 2026 TYPE-MOON ARCHIVE
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;