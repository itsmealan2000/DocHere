import React from 'react'

function footer() {
  return (
    <div className='mt-2 '>
  <footer className='ftr rounded'>
  <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4">
          <h5 class="mb-3 text-dark"><span className='doc'>Doc</span><span className='here'>Here</span></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
            voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3 text-dark">links</h5>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <a className='ftnav link-underline-primary' href="/doctor" >Doctor <i class="las la-search"></i></a>
            </li>
            <li class="mb-1">
              <a className='ftnav link-underline-success' href="/virtualconsult" >Virtual Consultation <i class="las la-vr-cardboard"></i></a>
            </li>
            <li class="mb-1">
              <a className='ftnav link-underline-info' href="/pharmacy" >Pharmacy <i class="las la-prescription-bottle-alt"></i></a>
            </li>
            <li>
              <a className='ftnav link-underline-danger' href="/Admin">Admin <i class="las la-user-shield"></i></a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-1 text-dark">Opening Hours</h5>
          <table class="table" >
            <tbody>
              <tr>
                <td>Mon - Fri:</td>
                <td>8 am - 9 pm</td>
              </tr>
              <tr>
                <td>Sat - Sun:</td>
                <td>11 am - 10 pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </footer>
        </div>
  )
}

export default footer