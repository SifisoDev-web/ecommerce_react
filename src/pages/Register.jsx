import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
  <h1 style={{ color: '#ff6600' }} className="text-center">Register</h1>
  <hr />
  <div className="row my-4 h-100">
    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
      <form>
        <div className="form my-3">
          <label htmlFor="Name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form my-3">
          <label htmlFor="Email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            placeholder="name@example.com"
          />
        </div>
        <div className="form my-3">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder="Password"
          />
        </div>
        <div className="my-3">
          <p>Already have an account? <Link to="/login" style={{ color: '#ff6600' }}>Login</Link></p>
        </div>
        <div className="text-center">
          <button style={{ color: '#ff6600' }} className="my-2 mx-auto btn" type="submit" disabled>
            Register
          </button>
        </div>

        <hr />
        <div className="text-center">
          <p>Or sign up with</p>

          <button
            type="button"
            className="btn btn-outline-dark my-1 w-100 d-flex align-items-center justify-content-center"
            onClick={() => alert("Google sign-up not implemented")}
          >
            <img
              src="assets/img/google.png"
              alt="Google"
              style={{ width: '20px', height: '20px', marginRight: '10px' }}
            />
            Sign up with Google
          </button>

          <button
            type="button"
            className="btn btn-outline-primary my-1 w-100 d-flex align-items-center justify-content-center"
            onClick={() => alert("Facebook sign-up not implemented")}
          >
            <img
              src="assets/img/facebook.png"
              alt="Facebook"
              style={{ width: '20px', height: '20px', marginRight: '10px' }}
            />
            Sign up with Facebook
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

            <Footer />
        </>
    )
}

export default Register