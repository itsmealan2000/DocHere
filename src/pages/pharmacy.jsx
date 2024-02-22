import React, { useState, useEffect,useContext } from 'react';
import { searchMedicineApi } from '../Services/AllApi';
import { UserContext  } from "../App";

function Pharmacy() {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState('');
  const { useremail, dispatch1 } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await searchMedicineApi(search);
        setMedicines(result.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };
    
    fetchData();
  }, [search]);
  
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredMedicines = medicines.filter(medicine =>
    medicine.medicinename.toLowerCase().includes(search.toLowerCase())
  );

    const { state, dispatch } = useContext(UserContext);
  console.log(state);
    const Renderbtn = () => {
      if ( state) {
        return (
          <>
          <button className='btn greenbtn'><a href="/userbills" className='nav-link active'>View My Prescription</a></button>
          </>
        )
      } 
      {
        return (
          <>
          </>
        )
      }
    }

  return (
    <div className='main mt-2 p-1 text-center container-fluid rounded'>
      <h1>Pharmacy</h1>
      <p>This is the Pharmacy page.</p>
      {/* Find your medicines */}
      <div className='w-50 ms-auto me-auto'>
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control rounded"
              placeholder="Search for medicines"
              value={search}
              onChange={handleInputChange}
            />
            {/* Removed the submit button */}
          </div>
        </form>
        <div className='searchresults' >
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Medicine</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {filteredMedicines.map((medicine) => (
                <tr key={medicine.id}>
                  <td>{medicine.medicinename}</td>
                  <td>{medicine.Price}</td>
                  <td>{medicine.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* mybill  */}
      <div className='mt-3'>
        <Renderbtn/>
      </div>
    </div>
  );
}

export default Pharmacy;
