import React, { useState , useContext} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { loginApi } from '../Services/AllApi';
import loginimg from '../assets/login/login.png';
import { UserContext } from '../App';

const login =()=> {
  const {state, dispatch} = useContext(UserContext);
  
  // State for the input fields and button
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.info("Please fill all the fields");
    } else {
      try {
        const result = await loginApi(userData);
        console.log(result);
        if (result.status === 200) {
          // Login successful
          // Clear the form fields
          setUserData({ email: "", password: "" });
          // Display success message
          toast.success("Login successful");
          dispatch({ type: "USER", payload: true })
          // Redirect to home page after a short delay
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);

        } else {
          // Login failed
          toast.error("Invalid email or password");
        }
      } catch (err) {
        console.error(err);
        toast.error(`Something went wrong ${err.message || err}`);
      }
    }
  };

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
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" 
                value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>
              </div>
              <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" 
                value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
            </form>
          </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default login