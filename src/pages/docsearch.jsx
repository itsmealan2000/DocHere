import React, { useState, useEffect } from 'react';
import { getDoctorApi } from '../Services/AllApi'; 

function DocSearch() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    const fetchSearchResults = async () => {
      try {
        const response = await getDoctorApi({ search: query });

        const filteredResults = response.data.filter(doctor => 
          doctor.docname.toLowerCase().includes(query.toLowerCase()) || 
          doctor.speciality.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query.trim() !== '') {
      fetchSearchResults();
    }else {

      getDoctorApi()
        .then(response => {
          setSearchResults(response.data);
        })
        .catch(error => {
          console.error('Error fetching all doctors:', error);
        });
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className='docsmain mt-2 rounded'>
      <div className='container'>
        <div className='row'>
          {/* leftside */}
          <div className='col-md-6'>
            <h1>
              <span className='doc'>Doc</span><span className='here'>search</span></h1>
            <p>Find a doctor near you</p>
          </div>
          <div className='col-md-6'>
            {/* search area  */}
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Search for doctors"
                  value={query}
                  onChange={handleInputChange}
                />
                {/* Removed the search button */}
              </div>
            </form>
            {/* Display search results */}
            <div className='container searchresults'>
              {searchResults.map((doctor) => (
                <div key={doctor.id}>
                  <h3 >{doctor.docname} <span>{doctor.available}</span></h3>
                  <p>{doctor.speciality}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocSearch;
