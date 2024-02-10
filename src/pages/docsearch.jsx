import React from 'react'

function docsearch() {
  return (
    <div className='docsmain mt-2 rounded'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1>
              <span className='doc'>Doc</span><span className='here'>search</span></h1>
            <p>Find a doctor near you</p>

          </div>
          <div className='col-md-6'>
            {/* search area  */}
            <form method="get" action="/docsearch">
              <div className="input-group mb-3">
                <input type="text" className="form-control rounded" placeholder="Search for doctors" name="search" />
                <div className="input-group-append m-1">
                  <button className="btn greenbtn" type="submit">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default docsearch