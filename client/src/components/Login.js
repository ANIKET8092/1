import React from 'react'
import { NavLink } from "react-router-dom";
import signpic from "../images/s.jpeg";

const Login = () => {
    return (
      <>
        <section className="sign-in">
          <div className="container mt-5">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img src={signpic} alt="signInImage" />
                </figure>
                <NavLink to="/Signup" className="signup-image-link">
                  Create An Account
                </NavLink>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form className="register-form" id="register-form">
                  <div className="form-group">
                    
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email material-icons-name"> </i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="your Email"
                    ></input>
                  </div>

                  

                 

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="your Password"
                    ></input>
                  </div>
                  <div className="form-group form-button">
                    <input
                      className="form-submit"
                      type="submit"
                      name="signin"
                      id="signin"
                      value="Log In"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Login
