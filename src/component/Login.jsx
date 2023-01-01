import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  
  const ShowPass = () =>{
    const input = document.querySelector(".login-pass input");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
  return (
    <section className="login">

      <div className="row ">
        <div className="col-md-12 col-sm-12 col-xs-12 ">
          <div className="login-content">
          <div className="login-img">
                  <img src="/assets/images/Intersection 1.png" alt=""/>
                </div>

            <div className="login-header">
              <h3>Welcome Back!</h3>
              <p>Sign In to continue to Pacific Shores Admin Portal</p>
            </div>

            <form className="form-login">
              <div className="login-name">
                <input type="text" name="uname"  placeholder="Username" />      
              </div>
              <div className="login-pass">
                <input type="password" name="uname"  placeholder="Password" />
                <img className='eye-pass' onClick={ShowPass} src="/assets/images/Group 64.svg" alt="" />
              </div>
              <div className="login-button">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <div className="login-forgot">
                <a href="#">Forgot Password?</a>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>


  );
}

export default Login;