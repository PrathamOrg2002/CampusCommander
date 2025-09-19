import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { all_routes } from "@/feature-module/router/all_routes"; 
import ImageWithBasePath from "@/core/common/imageWithBasePath";

const Login = () => {
  const routes = all_routes; 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", formData);

      // Save token
      localStorage.setItem("token", res.data.token);

      // Redirect
      navigate(routes.adminDashboard);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 mx-auto">
          <form onSubmit={handleLogin}>
            <div className="d-flex flex-column justify-content-between vh-100">
              {/* Logo */}
              <div className="mx-auto p-4 text-center">
                <ImageWithBasePath
                  src="assets/img/authentication/authentication-logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>

              {/* Card */}
              <div className="card">
                <div className="card-body p-4">
                  <div className="mb-4">
                    <h2 className="mb-2">Welcome</h2>
                    <p className="mb-0">Please enter your details to sign in</p>
                  </div>

                  {error && <p className="text-danger text-center">{error}</p>}

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <div className="input-icon mb-3 position-relative">
                      <span className="input-icon-addon">
                        <i className="ti ti-mail" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <div className="pass-group">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                      <span
                        className={`ti toggle-passwords ${
                          passwordVisible ? "ti-eye" : "ti-eye-off"
                        }`}
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      ></span>
                    </div>
                  </div>

                  {/* Remember + Forgot */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Remember Me</label>
                    </div>
                    <Link to={routes.forgotPassword} className="link-danger">
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Submit */}
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">
                      Sign In
                    </button>
                  </div>

                  {/* Register */}
                  <div className="text-center">
                    <p className="mb-0">
                      Don’t have an account?{" "}
                      <Link to={routes.register} className="hover-a">
                        Create Account
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 text-center">
                <p className="mb-0">Copyright © 2025 - Campus Commander</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
