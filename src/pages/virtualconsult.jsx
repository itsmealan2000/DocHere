import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons'; 

function virtualconsult() {
  return (
    <div className='docsmain mt-2 rounded container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 '>
            <h1><span className='doc'>Virtual</span> <span className='here'>Consultation</span></h1>
            <h5 className='bg-secondary-subtle rounded p-2 w-75'>
              Click Here for virtual Al by Buoy Health
              <button className='btn greenbtn m-2'>
                <a className='nav-link' href='https://www.buoyhealth.com/multi-symptom-checker'>Check</a>
              </button>
            </h5>
          </div>
          <div className='col-md-6 '>
            <form method="get" action="/docsearch">
              {/* connection */}
              <label htmlFor="connection" className='m-2'>Connection Type:</label>
              <select name="connection" id="connection" className='m-2 dropdown btn btn-secondary dropdown-toggle'>
                <option value="video">Video</option>
                <option value="audio">Audio</option>
                <option value="chat">Chat</option>
              </select>
              {/* Rest of your form */}
              <br />
              {/* search area  */}
              <div className="input-group mb-3">
                <input type="text" className="form-control rounded" placeholder="Search for doctors" name="search" />
                <div className="input-group-append m-1">
                  <button className="btn greenbtn" type="submit">Check availability</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default virtualconsult;
