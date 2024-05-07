import React from 'react';
import { Link } from 'react-router-dom';
import './register.css'; 

function RegisterForm() {
  return (
    <div className="wrapper">
      <form className="form-signin">
        <h2 className="form-signin-heading">Create an Account</h2>
        <input
          type="text"
          className="form-control"
          name="fullname"
          placeholder="Full Name"
          required=""
          autoFocus=""
        />
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="Email Address"
          required=""
        />
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required=""
        />
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          placeholder="Confirm Password"
          required=""
        />
        <br/>
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        > 
        Register
        </button>
        <p className="login-link">
        <Link to="/login">Back to login</Link>
        </p>
      </form>
    </div>
  );
}
export default RegisterForm;
