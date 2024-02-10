import React from 'react'

function navbar() {
  return (
    <nav className="navbar navbar-expand-sm  rounded" >
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mt-1" id="navbarTogglerDemo01">
      <img src="src/assets/logos/logo.png" alt="" className='img-fluid navlogo' />
        <a className="navbar-brand ms-3" href="/">Doc<span className='here'>Here</span></a>
        <ul className="navbar-nav ms-auto me-1">
          <li className="nav-item liri">
            <button className='btn '><a className="nav-link active" aria-current="page" href="/docsearch">Doctor <i class="las la-search"></i></a></button>
          </li>
          <li className="nav-item liri">
            <button className='btn'><a className="nav-link active" href="/virtualconsult">Virtual Consultation <i class="las la-vr-cardboard"></i></a></button>
          </li>
          <li className="nav-item lili">
            <button className='btn'><a className="nav-link active" href="/pharmacy">Pharmacy <i class="las la-prescription-bottle-alt"></i></a></button>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto" >
        <li className="nav-item liri">
            <button className='btn pnkbtn'><a className="nav-link active " href="/login">Login <i class="las la-sign-in-alt"></i></a></button>
          </li>
          <li className="nav-item lili">
            <button className='btn pnkbtn'><a className="nav-link active" href="/signup">Sign Up <i class="las la-user-check"></i></a></button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default navbar