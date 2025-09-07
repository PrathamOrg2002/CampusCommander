import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const ResetPassword = () => {
  const routes = all_routes;
  const navigation = useNavigate();
const navigationPath = () => {
    navigation(routes.resetPasswordSuccess);
  };
  // Form values state
  const [formValues, setFormValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Password visibility state
  const [passwordVisibility, setPasswordVisibility] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Toggle visibility
  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.oldPassword || !formValues.newPassword || !formValues.confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (formValues.newPassword !== formValues.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    // TODO: Call API for reset password
    console.log("Reset password data:", formValues);

    navigation(routes.resetPasswordSuccess);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column justify-content-between vh-100">
              <div className="mx-auto p-4 text-center">
                <ImageWithBasePath
                  src="assets/img/authentication/authentication-logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>

              <div className="card">
                <div className="card-body p-4 pb-3">
                  <div className="mb-4">
                    <h2 className="mb-2">Reset Password?</h2>
                    <p className="mb-0">
                      Enter New Password &amp; Confirm Password to get inside
                    </p>
                  </div>

                  {/* Old Password */}
                  <div className="mb-3">
                    <label className="form-label">Old Password</label>
                    <div className="pass-group">
                      <input
                        type={passwordVisibility.oldPassword ? "text" : "password"}
                        className="pass-input form-control"
                        name="oldPassword"
                        value={formValues.oldPassword}
                        onChange={handleChange}
                      />
                      <span
                        className={`ti toggle-passwords ${
                          passwordVisibility.oldPassword ? "ti-eye" : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("oldPassword")}
                      ></span>
                    </div>
                  </div>

                  {/* New Password */}
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <div className="pass-group">
                      <input
                        type={passwordVisibility.newPassword ? "text" : "password"}
                        className="pass-input form-control"
                        name="newPassword"
                        value={formValues.newPassword}
                        onChange={handleChange}
                      />
                      <span
                        className={`ti toggle-passwords ${
                          passwordVisibility.newPassword ? "ti-eye" : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("newPassword")}
                      ></span>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-3">
                    <label className="form-label">New Confirm Password</label>
                    <div className="pass-group">
                      <input
                        type={passwordVisibility.confirmPassword ? "text" : "password"}
                        className="pass-input form-control"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                      />
                      <span
                        className={`ti toggle-passwords ${
                          passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"
                        }`}
                        onClick={() => togglePasswordVisibility("confirmPassword")}
                      ></span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mb-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        onClick={navigationPath}
                      >
                        Change Password
                      </button>
                    </div>

                  <div className="text-center">
                    <h6 className="fw-normal text-dark mb-0">
                      Return to
                      <Link to={routes.login} className="hover-a ">
                        {" "}
                        Login
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>

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

export default ResetPassword;
