import React, { useState } from "react";
import { addDoctorApi,removeDoctorApi } from "../Services/AllApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DoctorManage() {
  const [doctorData, setDoctorData] = useState({
    docname: "",
    specialization: "",
    available:""
  });
  const inital = "Dr. "
  const registerDoctor = async (e) => {
    e.preventDefault();
    console.log(doctorData);
    const { docname, speciality, available } = doctorData;
    if (!docname || !speciality || !available) {
      alert("Please fill all the fields");
    } else {
      try {
        const result = await addDoctorApi(doctorData);
        console.log(result);
        if (result.status === 200) {
          setDoctorData({ docname: "", speciality: "", available: "" });
          toast.success(
            `${result.data.username } has been added Successfully`
          );
        } else {
          alert("Doctor already exists");
        }
      } catch (err) {
        console.error(err);
        alert(`Something went wrong ${err.message || err}`);
      }
    }
  }

    const removeDoctor = async (e) => {
    e.preventDefault();
    console.log(doctorData);
    const { docname } = doctorData;
    if (!docname) {
      alert("Please fill all the fields");
    } else {
      try {
        const result = await removeDoctorApi(doctorData);
        console.log(result);
        if (result.status === 200) {
          setDoctorData({ docname: "", speciality: "", available: "" });
          toast.success(
            `${result.data.username } has been removed Successfully`
          );
        } else {
          alert("Doctor not found");
        }
      } catch (err) {
        console.error(err);
        alert(`Something went wrong ${err.message || err}`);
      }
    }
  }
  


  return (
    <>
    <div className='main m-2 p-5 rounded fs-5'>
     {/* doctorlist add remove  */}
     <form method="get" action="/docsearch" className='w-75 ms-auto me-auto'>
     <div className="input-group mb-3 d-flex flex-column">
        <h1>Doctor Manage</h1>
        <hr />
        <h2>ADD Doctors</h2>
      </div>
     {/* add  */}
     <div className="form-group">
       <label for="name">Name of Doctor:</label>
       <p className="text-danger">Type only the name, please. Initial - {inital} will be added automatically.</p>
       <input type="text" className="form-control" id="name" name="name" required
        onChange={(e) => setDoctorData({ ...doctorData, docname: `${inital}${e.target.value}` })}
       />
     </div>
      {/* specification of doctor */}
        <div className="form-group">
        <label htmlFor="specialization">Specialization:</label>
        <select className="form-control" id="specialization" name="specialization" required
        onChange={(e) => setDoctorData({ ...doctorData, speciality: e.target.value })}
        >
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
        {/* availability */}
      <div className="">
          <label for="aavailable">availability :</label>
          <select className="form-control" id="available" name="available" required
          onChange={(e) => setDoctorData({ ...doctorData, available: e.target.value })}
          >
          <option value="">Select Availability</option>
          <option value="Online">Online</option>
          <option value="Appoinment">Appoinment Only</option>
          </select>
      </div>
      <button type="submit" className="btn greenbtn mt-2"
      onClick={registerDoctor}
      >Add</button>
     <hr />
     <h1>Remove Doctor</h1>
     {/* remove  */}
     <div className="form-group">
       <label for="name">Name:</label>
       <input type="text" className="form-control" id="name" name="name" required 
       onChange={(e) => setDoctorData({ ...doctorData, docname: `${inital}${e.target.value}` })}/>
     </div>
     <button type="submit" className="btn greenbtn mt-2" onClick={removeDoctor}>Remove</button>

     </form>
     <ToastContainer />
     </div>
     </>
  )
}

export default DoctorManage