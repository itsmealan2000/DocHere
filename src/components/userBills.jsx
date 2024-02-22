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
        const userBillsResponse = await getUserBillApi(usernames);
        
        console.log('userBillsResponse:', userBillsResponse); 
    
        if (!Array.isArray(userBillsResponse.data)) {
          throw new Error('Data fetched is not an array');
        }
    
        const filteredBills = userBillsResponse.data.filter(bill => bill.username === usernames);
    
        setBills(filteredBills);
      } catch (error) {
        console.error('Error fetching user bills:', error);
        toast.error('Error fetching user bills');
      }
    };
    
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
