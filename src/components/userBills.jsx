import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getUserBillApi } from '../Services/AllApi';
import { UserContext } from '../App';

function UserBills() {
  const { usernames } = useContext(UserContext);
  const [bills, setBills] = useState([]);

    console.log("usernames",usernames);
    const fetchUserBills = async () => {
      try {
        // Fetch user bills based on usernames
        const userBillsResponse = await getUserBillApi(usernames);
        
        console.log('userBillsResponse:', userBillsResponse); // Log the response to see its structure
    
        // Check if the data property of the response is an array
        if (!Array.isArray(userBillsResponse.data)) {
          throw new Error('Data fetched is not an array');
        }
    
        // Filter user bills that match with usernames
        const filteredBills = userBillsResponse.data.filter(bill => bill.username === usernames);
    
        // Set the filtered bills in state
        setBills(filteredBills);
      } catch (error) {
        // Handle errors
        console.error('Error fetching user bills:', error);
        // Notify the user about the error
        toast.error('Error fetching user bills');
      }
    };
    
    // Call the fetchUserBills function when component mounts
    useEffect(() => {
      fetchUserBills();
    }, [usernames]);
    
  return (
    <>
      <div className='main m-2 p-5 rounded'>
        <h2>User Bills</h2>
        <table className="table table-striped table-bordered">
  <thead className="thead-dark">
    <tr>
      <th>Username</th>
      <th>Medicine Names</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {bills.map((bill, index) => (
      <tr key={bill._id}>
        <td>{bill.username}</td>
        <td>{bill.medicineName.join(', ')}</td>
        <td>{bill.total}</td>
      </tr>
    ))}
  </tbody>
</table>
      </div>
      <ToastContainer />
    </>
  );
}

export default UserBills;
