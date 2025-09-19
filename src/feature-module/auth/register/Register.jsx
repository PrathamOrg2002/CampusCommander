import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "@/feature-module/router/all_routes"; 
import ImageWithBasePath from "@/core/common/imageWithBasePath";
import axios from "axios"; // 👈 important!

const Register = () => {
  const routes = all_routes;
  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData,
        { headers: { "Content-Type": "application/json" } ,
     withCredentials: true,
    }
      );

      console.log("Register success:", res.data);
      alert("Registration successful! Please login.");
      navigation(routes.login);
    } catch (err) {
      console.error("Register error:", err.response?.data);
      alert(
        "Registration failed: " +
          JSON.stringify(err.response?.data?.errors || err.response?.data || "Unknown error")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column justify-content-between vh-100">
              {/* Logo */}
              <div className=" mx-auto p-4 text-center">
                <ImageWithBasePath
                  src="assets/img/authentication/authentication-logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>

              {/* Card */}
              <div className="card">
                <div className="card-body p-4">
                  <div className=" mb-4">
                    <h2 className="mb-2">Register</h2>
                    <p className="mb-0">Please enter your details to sign up</p>
                  </div>

                  {/* Name */}
                  <label className="form-label">Name</label>
                  <div className="input-icon mb-3 position-relative">
                    <span className="input-icon-addon">
                      <i className="ti ti-user" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <label className="form-label">Email Address</label>
                  <div className="input-icon mb-3 position-relative">
                    <span className="input-icon-addon">
                      <i className="ti ti-mail" />
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password */}
                  <label className="form-label">Password</label>
                  <div className="pass-group mb-3">
                    <input
                      type={passwordVisibility.password ? "text" : "password"}
                      name="password"
                      className="pass-input form-control"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <span
                      className={`ti toggle-passwords ${
                        passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                      }`}
                      onClick={() => togglePasswordVisibility("password")}
                    ></span>
                  </div>

                  {/* Confirm Password */}
                  <label className="form-label">Confirm Password</label>
                  <div className="pass-group mb-3">
                    <input
                      type={passwordVisibility.confirmPassword ? "text" : "password"}
                      name="password_confirmation"
                      className="pass-input form-control"
                      value={formData.password_confirmation}
                      onChange={handleChange}
                      required
                    />
                    <span
                      className={`ti toggle-passwords ${
                        passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"
                      }`}
                      onClick={() => togglePasswordVisibility("confirmPassword")}
                    ></span>
                  </div>

                  {/* Terms */}
                  <div className="form-wrap form-wrap-checkbox mb-3">
                    <div className="d-flex align-items-center">
                      <div className="form-check form-check-md mb-0 me-2">
                        <input className="form-check-input mt-0" type="checkbox" required />
                      </div>
                      <h6 className="fw-normal text-dark mb-0">
                        I Agree to
                        <Link to="#" className="hover-a ">
                          {" "}Terms &amp; Privacy
                        </Link>
                      </h6>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                      {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center">
                    <h6 className="fw-normal text-dark mb-0">
                      Already have an account?
                      <Link to={routes.login} className="hover-a ">
                        {" "}Sign In
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 text-center">
                <p className="mb-0 ">Copyright © 2025 - Campus Commander</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
