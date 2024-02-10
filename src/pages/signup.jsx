import React from 'react'
import signupimg from '../assets/login/signup.png';
function signup() {
  return (
    <div className='login rounded mt-2 p-2 container-fluid '>
     <div className='row'>
      <h1 className='text-center' >Signup</h1>
      <hr  className='border border-5 rounded'/>
        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
        <img src={signupimg} alt="" className='w-50' />
        <h3 className='mt-3'><span className='doc'>Join</span> <span className='here'>Us</span></h3>
        <p>Already have an account? <a href="/login">Login</a></p>
        </div>
        <div className='col-md-6 login1 border-start border-5 border-success rounded'>
          <form method="post" action="/signup" className='w-75'>
            <div className="form-group">
              <label for="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name"  required />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input type="password" className="form-control" id="password" name="password" required />
            </div>
            <button type="submit" className="btn greenbtn mt-2">Signup</button>
          </form>
        </div>
     </div>
    </div>
  )
}

export default signup