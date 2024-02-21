import React from 'react'

function admin() {
  return (
    <div className='main m-2 rounded p-5'>
      <h1>Admin</h1>
      <p>Welcome to Admin page.</p>
      <hr />
      <h1>To Manage Doctors</h1>
      <button className='btn btn-primary'><a href="/DoctorManage" className='nav-link active'>Doctor Manage</a></button>
        <form action="">
        <h1>ADD MEDICINES FOR PHARMACY</h1>
        {/* add remove medicines */}
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label for="price">Price:</label>
          <input type="text" className="form-control" id="price" name="price" required />
        </div>
        <div className="form-group">
          <label for="stock">Stock:</label>
          <input type="text" className="form-control" id="stock" name="stock" required />
        </div>
        <button type="submit" className="btn greenbtn mt-2">Add</button>
        <hr />
        <h1>Remove medicine</h1>
        {/* remove  */}
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <button type="submit" className="btn greenbtn mt-2">Remove</button>
        <hr />
        <h1>Add Patient Bill</h1>
        {/* add remove patient bill */}
        <div className="form-group">
          <label for="name">Patient Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        {/* meidcine list */}
        <div className="form-group">
          <label for="name">Medicine Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label for="price">Price:</label>
          <input type="text" className="form-control" id="price" name="price" required />
        </div>
        {/* total medicine bill */}
        <div className="form-group">
          <label for="price">Total:</label>
          <input type="text" className="form-control" id="price" name="price" required />
        </div>
        <hr />
        <h1>Remove Patient Bill</h1>
        {/* remove  */}
        <div className="form-group">
          <label for="name">Patient Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <button type="submit" className="btn greenbtn mt-2">Remove</button>
        <hr />
      </form>
    </div>

  )
}

export default admin