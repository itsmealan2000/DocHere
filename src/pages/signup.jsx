import React, { useState, useContext } from "react";
import signupimg from "../assets/login/signup.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerApi } from "../Services/AllApi";
import { UserContext } from "../App";

function signup() {
  const { state, dispatch } = useContext(UserContext);
  const {useremail,dispatch1} = useContext(UserContext);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    gender:""
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(userData);
    const { username, email, password,age } = userData;
    if (!username || !email || !password || !age) {
      toast.info("Please fill all the fields");
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
    } else {
      try {
        const result = await registerApi(userData);
        console.log(result);
        if (result.status === 200) {
          setUserData({ username: "", email: "", password: "",age:"",gender:"" });
          toast.success(
            `${result.data.username} has been Registered Successfully`
          );
          dispatch({ type: "USER", payload: true });
          dispatch1({ type: "USEREMAIL", payload: email })
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
        } else {
          toast.error("Email already exists");
        }
      } catch (err) {
        console.error(err);
        toast.error(`Something went wrong ${err.message || err}`);
      }
    }
  };

  return (
    <div className="login rounded mt-2 p-2 container-fluid ">
      <div className="row">
        <h1 className="text-center">Signup</h1>
        <hr className="border border-5 rounded" />
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={signupimg} alt="" className="w-50" />
          <h3 className="mt-3">
            <span className="doc">Join</span> <span className="here">Us</span>
          </h3>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
        <div className="col-md-6 login1 border-start border-5 border-success rounded">
          <form method="post" action="/signup" className="w-75">
             <div className="row">
                <div className="col-6">
                <div className="form-group">
                  {/* name  */}
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    onChange={(e) =>
                      setUserData({ ...userData, username: e.target.value })
                    }
                    value={userData.username}
                  />
                </div>
                {/* email  */}
                <div className="form-group">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    value={userData.email}
                  />
                </div>
                {/* password  */}
                <div className="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    value={userData.password}
                  />
                  </div>
                </div>
                  <div className="col-6">
                  {/* age */}
                  <div className="form-group">
                    <label for="age">Age:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      name="age"
                      required
                      onChange={(e) =>
                        setUserData({ ...userData, age: e.target.value })
                      }
                      value={userData.age}
                    />
                  </div> 
                      {/* gender */}
                      <div className="form-group">
                        <label htmlFor="genderSelect">Gender:</label>
                          <select
                            className="form-control"
                            id="genderSelect"
                            name="gender"
                            onChange={(e) =>
                              setUserData({ ...userData, gender: e.target.value })
                            }
                          >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                  </div>
             </div>   
            <button
              type="submit"
              className="btn greenbtn mt-2"
              onClick={handleRegister}
            >
              {" "}
              Signup{" "}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default signup;
