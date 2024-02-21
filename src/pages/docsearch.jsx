import React, { useState, useEffect } from 'react';
import { getDoctorApi } from '../Services/AllApi'; // Import your API function for fetching doctors

function DocSearch() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch search results when the query changes
    const fetchSearchResults = async () => {
      try {
        const response = await getDoctorApi({ search: query });
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]); // Clear search results if the query is empty
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
                <div className="input-group-append m-1">
                  <button className="btn greenbtn" type="button">Search</button>
                </div>
              </div>
            </form>
            {/* Display search results */}
            <div className='container-fluid'>
              {searchResults.map((doctor) => (
                <div key={doctor.id}>
                  <h3>{doctor.docname}</h3>
                  <p>{doctor.speciality}</p>
                  {/* Add more information about the doctor as needed */}
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
