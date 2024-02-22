import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { SERVER_URL } from "../Services/Serverurl";

const Profile = () => {
  const { useremail } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userGender, setUserGender] = useState('');
  const { usernames, dispatch2 } = useContext(UserContext);


  useEffect(() => {
    const fetchProfile = async () => {
      try {I
        const response = await fetch(`${SERVER_URL}/profile?email=${useremail}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        //dispatch2
        localStorage.setItem("username", data.username);
        dispatch2({ type: "USERNAME", payload: data.username });
        
        // Set the user name, age, and gender in the state
        setUserName(data.username); 
        setUserAge(data.age);
        setUserGender(data.gender);

      } catch (error) {
        // Handle errors
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, [useremail]); 

  return (
    <div className='profilebody m-3 p-5 rounded d-flex flex-column justify-content-center align-items-center'>
      <h1 className='text-center'>{userName}'s Profile</h1>
      <div className='container border border-2 rounded p-5 m-5 w-50 fs-2 profileholder'>
        <div className='' >
          <p>Email : {useremail}</p>
          <p>Age : {userAge}</p>
          <p>Gender : {userGender}</p>
        </div>
        <button className='btn greenbtn'>
          <a href="/userbills" className='nav-link active'>
          View My Prescription 
          </a>
          </button>
      </div>
    </div>
  );
};

export default Profile;
