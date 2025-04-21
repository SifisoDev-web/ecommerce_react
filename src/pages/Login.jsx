import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
  <h1 style={{ color: '#ff6600' }} className="text-center">Login</h1>
  <hr />
  <div className="row my-4 h-100">
    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
      <form>
        <div className="my-3">
          <label htmlFor="floatingInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
        </div>
        <div className="my-3">
          <label htmlFor="floatingPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
        </div>
        <div className="my-3">
          <p>New Here? <Link to="/register" style={{ color: '#ff6600' }}>Register</Link></p>
        </div>
        <div className="text-center">
          <button style={{ color: '#ff6600' }} className="my-2 mx-auto btn" type="submit" disabled>
            Login
          </button>
        </div>

        <hr />
        <div className="text-center">
          <p>Or login with</p>

          <button
            type="button"
            className="btn btn-outline-dark my-1 w-100 d-flex align-items-center justify-content-center"
            onClick={() => alert("Google login not implemented")}
          >
            <img
              src="assets/img/google.png"
              alt="Google"
              style={{ width: '20px', height: '20px', marginRight: '10px' }}
            />
            Continue with Google
          </button>

          <button
            type="button"
            className="btn btn-outline-primary my-1 w-100 d-flex align-items-center justify-content-center"
            onClick={() => alert("Facebook login not implemented")}
          >
            <img
              src="assets/img/facebook.png"
              alt="Facebook"
              style={{ width: '20px', height: '20px', marginRight: '10px' }}
            />
            Continue with Facebook
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
};

export default Login;
