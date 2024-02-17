import React, { useContext } from 'react';
import { UserContext } from '../App';

const Logout = () => {
  const {state, dispatch } = useContext(UserContext);
  
  // Logout the user by setting payload to false
  dispatch({ type: "USER", payload: false });
  
  // Clear localStorage
  localStorage.removeItem("USER");

  // Redirect to home page
  window.location.href = "/";
  
}

export default Logout;
