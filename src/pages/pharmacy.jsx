import React from 'react'

function pharmacy() {
  return (
    <div className='main mt-2 p-1 text-center container-fluid rounded'>
      <h1>Pharmacy</h1>
      <p>This is the Pharmacy page.</p>
      {/* find your medicines  */}
      <form method="get" action="/docsearch">
        <div className="input-group mb-3">
          <input type="text" className="form-control rounded" placeholder="Search for medicines" name="search" />
          <div className="input-group-append m-1">
            <button className="btn greenbtn" type="submit">Search</button>
          </div>
        </div>
      </form>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paracetamol</td>
            <td>₹50</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Aspirin</td>
            <td>₹100</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Amoxicillin</td>
            <td>₹150</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Hydrocodone</td>
            <td>₹200</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Acetaminophen</td>
            <td>₹250</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Codeine</td>
            <td>₹300</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Morphine</td>
            <td>₹350</td>
            <td>Available</td>
          </tr>
        </tbody>
      </table>
      {/* find prescription */}
      <form method="get" action="/docsearch">
        <div className="input-group mb-3">
          <input type="text" className="form-control rounded" placeholder="Search your prescription #bill123" name="search" />
          <div className="input-group-append m-1">
            <button className="btn greenbtn" type="submit">Search</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default pharmacy