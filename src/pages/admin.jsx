import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Admin() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // Here you can implement your authentication logic
    // For simplicity, let's assume a hardcoded admin ID and password
    const hardcodedAdminId = 'admin123';
    const hardcodedPassword = 'admin123';

    if (adminId === hardcodedAdminId && password === hardcodedPassword) {
      setAuthenticated(true);
    } else {
      toast.warning('Invalid admin ID or password');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    // You can add additional logout logic here if needed
  };

  return (
    <div className='main m-2 rounded p-5'>
      {authenticated ? (
        <>
          <h1>Admin</h1>
          <p>Welcome to Admin page.</p>
          <hr />
          <h1>To Manage Doctors</h1>
          <button className='btn btn-primary'>
            <a href="/DoctorManage" className='nav-link active'>Doctor Manage</a>
          </button>
          <hr />
          <h1>To Manage Medicines </h1>
          <button className='btn btn-primary'>
            <a href="/MedicineManage" className='nav-link active'>Medicine Manage</a>
          </button>
          <hr />
          <h1>Patient Bills</h1>
          <button className='btn btn-primary'>
            <a href="/Bills" className='nav-link active'>Bills</a>
          </button>
          <hr />
          <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
        </>
      ) : (
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h1>Admin Login</h1>
          <input
            type="text"
            placeholder="Admin ID"
            value={adminId}
            className='form-control mt-3 w-25'
            onChange={(e) => setAdminId(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className='form-control w-25'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin} className='btn btn-primary'>Login</button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Admin;
