import React from 'react'
import {NavLink} from 'react-router-dom'
import signpic from "../images/s.jpeg"

const Signup = () => {
    return (
      <div>
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      placeholder="your Name"
                    ></input>
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
                    <label htmlFor="phone">
                      <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      placeholder="your Phone"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="work">
                      <i className="zmdi zmdi-slideshow material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="work"
                      id="work"
                      autoComplete="off"
                      placeholder="your Profession"
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

                  <div className="form-group">
                    <label htmlFor="cpassword">
                      <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="cpassword"
                      name="cpassword"
                      id="cpassword"
                      autoComplete="off"
                      placeholder="Confirm your Password"
                    ></input>
                  </div>
                  <div className="form-group form-button">
                    <input
                      className="form-submit"
                      type="submit"
                      name="signup"
                      id="signup"
                      value="submit"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={signpic} alt="signInImage" />
                </figure>
                <NavLink to="/login" className="signup-image-link">
                  Already Registered
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Signup
