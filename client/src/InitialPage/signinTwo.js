import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { all_routes } from "../Router/all_routes";

const SigninTwo = () => {
  const route = all_routes;
  const [passwordVisible, setPasswordVisible] = useState(false); // State to track password visibility

  // Function to handle toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility state
  };

  const navigate = useNavigate();
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [errorMessage, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setError("");
    const { name, value } = e?.target || {};
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="login-wrapper">
          <div className="login-content">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="login-userset">
                <div className="login-logo logo-normal">
                  <img alt="" src="../images/logo.png" />
                </div>
                <Link to={route.dashboard} className="login-logo logo-white">
                  <img alt="" src="../images/logo-white.png" />
                </Link>
                <div className="login-userheading">
                  <h3>Sign In</h3>
                  <h4>Access the panel using your email and passcode.</h4>
                </div>
                <div className="form-login">
                  <label>Email Address</label>
                  <div className="form-addons">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                    <img alt="" src="../images/icons/mail.svg" />
                  </div>
                </div>
                <div className="form-login">
                  <label>Password</label>
                  <div className="pass-group">
                    <input
                      type={`${passwordVisible ? "text" : "password"}`}
                      name="password"
                      onChange={handleChange}
                      required
                      className="pass-input"
                    />

                    <span
                      className={`fas toggle-password ${
                        passwordVisible ? "fa-eye" : "fa-eye-slash"
                      }`}
                      onClick={togglePasswordVisibility} // Call togglePasswordVisibility when toggle button is clicked
                    />
                  </div>
                </div>
                {errorMessage && (
                  <div className="errorMessage">{errorMessage}</div>
                )}
                <div className="form-login">
                  <button className="btn btn-login">Sign In</button>
                </div>
                <div className="signinform">
                  <h4>
                    New on our platform?
                    <Link to={route.registerTwo} className="hover-a">
                      {" "}
                      Create an account
                    </Link>
                  </h4>
                </div>
                <div className="form-setlogin or-text">
                  <h4>OR</h4>
                </div>
                <div className="form-sociallink">
                  <div
                    id="signInDiv"
                    className="d-flex justify-content-center"
                  ></div>
                  <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                    <p>Copyright © 2024. All rights reserved</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="login-img">
            <img alt="" src="../images/authentication/login02.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninTwo;
