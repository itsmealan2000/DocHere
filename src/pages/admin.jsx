import React from 'react'

function admin() {
  return (
    <div className='main mt-2 rounded p-2'>
      <h1>Admin</h1>
      <p>This is the Admin page.</p>
      <hr />
      <h1>ADD REMOVE DOCTORS</h1>
      {/* doctorlist add remove  */}
      <form method="get" action="/docsearch">
        <div className="input-group mb-3 d-flex flex-column">
          <input type="text" className="form-control rounded w-100" placeholder="Search for doctors" name="search" />
          <div className="input-group-append m-1">
            <button className="btn greenbtn" type="submit">Search</button>
          </div>
          {/* doctor list from search  */}
          <table class="table table-success table-striped">
            {/* mongodb */}
            <tr>
              <th>Doctor Name</th>
              <th>Specialization</th>
            </tr>
            <tr>
              <td>Dr. A</td>
              <td>Cardiology</td>
            </tr>
          </table>
        </div>
        {/* add  */}
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
{/* specification of doctor */}
<div className="form-group">
  <label htmlFor="specialization">Specialization:</label>
  <select className="form-control" id="specialization" name="specialization" required>
    <option value="">Select Specialization</option>
    <option value="Cardiology">Cardiology</option>
    <option value="Dermatology">Dermatology</option>
    <option value="Endocrinology">Endocrinology</option>
    <option value="Gastroenterology">Gastroenterology</option>
    <option value="Hematology">Hematology</option>
    <option value="Nephrology">Nephrology</option>
    <option value="Neurology">Neurology</option>
    <option value="Oncology">Oncology</option>
    <option value="Orthopedics">Orthopedics</option>
    <option value="Ophthalmology">Ophthalmology</option>
    <option value="Pediatrics">Pediatrics</option>
    <option value="Psychiatry">Psychiatry</option>
    <option value="Pulmonology">Pulmonology</option>
    <option value="Rheumatology">Rheumatology</option>
    <option value="Urology">Urology</option>
    <option value="Gynecology">Gynecology</option>
    <option value="Otolaryngology">Otolaryngology</option>
    <option value="Allergy and Immunology">Allergy and Immunology</option>
    <option value="Infectious Diseases">Infectious Diseases</option>
    <option value="Physical Medicine and Rehabilitation">Physical Medicine and Rehabilitation</option>
  </select>
</div>
        <button type="submit" className="btn greenbtn mt-2">Add</button>
        <hr />
        <h1>Remove Doctor</h1>
        {/* remove  */}
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <button type="submit" className="btn greenbtn mt-2">Remove</button>
        <hr />
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