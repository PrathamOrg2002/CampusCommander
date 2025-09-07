import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "@/feature-module/router/all_routes"; 
import ImageWithBasePath from "@/core/common/imageWithBasePath";

const Login = () => {
  const routes = all_routes; 
 //const navigation = useNavigate();

  const navigationPath = (e) => {
    e.preventDefault(); // prevent page refresh
    // navigation(routes.adminDashboard); // ⬅️ Enable when routes are ready
    console.log("Login clicked 🚀");
  };

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 mx-auto">
          <form>
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

                  {/* Social Buttons */}
                  <div className="mt-4">
                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <div className="text-center me-2 flex-fill">
                        <a
                          href="#"
                          className="bg-primary br-10 p-2 btn btn-primary d-flex align-items-center justify-content-center"
                        >
                          <ImageWithBasePath
                            className="img-fluid m-1"
                            src="assets/img/icons/facebook-logo.svg"
                            alt="Facebook"
                          />
                        </a>
                      </div>
                      <div className="text-center me-2 flex-fill">
                        <a
                          href="#"
                          className="br-10 p-2 btn btn-outline-light d-flex align-items-center justify-content-center"
                        >
                          <ImageWithBasePath
                            className="img-fluid m-1"
                            src="assets/img/icons/google-logo.svg"
                            alt="Google"
                          />
                        </a>
                      </div>
                      <div className="text-center flex-fill">
                        <a
                          href="#"
                          className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                        >
                          <ImageWithBasePath
                            className="img-fluid m-1"
                            src="assets/img/icons/apple-logo.svg"
                            alt="Apple"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="login-or">
                    <span className="span-or">Or</span>
                  </div>

                  {/* Email + Password */}
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <div className="input-icon mb-3 position-relative">
                      <span className="input-icon-addon">
                        <i className="ti ti-mail" />
                      </span>
                      <input type="text" className="form-control" />
                    </div>

                    <label className="form-label">Password</label>
                    <div className="pass-group">
                      <input
                        type={passwordVisibility.password ? "text" : "password"}
                        className="pass-input form-control"
                      />
                      <span
                        className={`ti toggle-passwords ${
                          passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("password")}
                      ></span>
                    </div>
                  </div>

                  {/* Remember + Forgot */}
                  <div className="form-wrap form-wrap-checkbox mb-3">
                    <div className="d-flex align-items-center">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                        />
                      </div>
                      <p className="ms-1 mb-0">Remember Me</p>
                    </div>
                    <div className="text-end ">
                        <Link to={routes.forgotPassword} className="link-danger">
                          Forgot Password?
                        </Link>
                      </div>
                  </div>

                  {/* Sign In Button */}
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      onClick={navigationPath}
                    >
                      Sign In
                    </button>
                  </div>

                  {/* Register Link */}
                  <div className="text-center">
                    <h6 className="fw-normal text-dark mb-0">
                      Don’t have an account?{" "}
                      {/* <Link to={routes.register3} className="hover-a">Create Account</Link> */}
                      <Link to={routes.register} className="hover-a ">
                        {" "}
                        Create Account
                      </Link>
                    </h6>
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
