import React from 'react'

function home() {
  return (
    <section className='main w-100 container-fluid rounded'>
    <div className='container-fluid mt-1 '>
      <div className='row'>
        <div className='col-md-6 d-flex  flex-column justify-content-center align-items-start vh-50 mt-5'>
          <h1 className='display-4'>Welcome to <span className='doc'>Doc</span><span className='here'>Here</span></h1>
          <p className='lead'>Get the best medical advice from the best doctors</p>
          <button className='btn pnkbtn'>Book an appointment</button>
        </div>
        <div className='col-md-6 d-flex  flex-column justify-content-center align-items-start vh-100'>
          <img src="src/assets/homepage/welcomepage.gif" alt="" className='img-fluid w-75 gifimg' />
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default home