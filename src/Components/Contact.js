import React from 'react'

export default function Contact() {
  return (
    <div style={{color:"white"}}>
      <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">First name</label>
    <input type="text" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputAddress" />
  </div>
  <div className="col-12">
  <label htmlFor="exampleFormControlTextarea1" class="form-label">Write a Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(7,10,196)"}} onClick={(e)=>{e.preventDefault()}}>Submit</button>
  </div>
</form>
    </div>
  )
}
