import React from 'react'
import loginimg from '../assets/login/login.png';
function login() {
  return (
      <div className="container-fluid mt-2 rounded p-2 login">
      {/* login with google also  */}
        <div className='row'>
        <h2 className='text-center'>Login</h2>
        <hr className='border border-5 rounded' />
          <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
            <img src={loginimg} alt="" className='w-50' />
            <h3><span className='doc'>Welcome</span> <span className='here'>Back</span>
            </h3>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
          <div className='col-md-6 login1 border-start border-5 border-success rounded'>
            <form action="/login" method="post" className='w-75'>
              <div className="form-group ">
                <label for="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
              </div>
              <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default login