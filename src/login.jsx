import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Make sure to import your CSS file if you have any styles specific to this component

function LoginForm() {
  return (
    <div className="wrapper">
      <form className="form-signin">
        <h2 className="form-signin-heading">Please login</h2>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Email Address"
          required=""
          autoFocus=""
        />
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required=""
        />
        <div className="checkbox">
          <label>
          <input
            type="checkbox"
            value="remember-me"
            id="rememberMe"
            name="rememberMe"
          />{' '}
          Remember me
        </label>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Login
        </button>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register now</Link>
        </p>
      </form>
      
    </div>
  );
}

export default LoginForm;
