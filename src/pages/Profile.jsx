import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { SERVER_URL } from "../Services/Serverurl"

const Profile = () => {
  const { useremail, dispatch1 } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userGender, setUserGender] = useState('');


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch user profile data from the backend API
        const response = await fetch(`${SERVER_URL}/profile?email=${useremail}`);
        
        // Check if response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON data from the response body
        const data = await response.json();
        
        // Log the parsed JSON data
        console.log(data);
        
        // Set the user name in the state
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
      </div>
    </div>
  );
};

export default Profile;
