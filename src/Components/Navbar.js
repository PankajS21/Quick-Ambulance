import React from 'react'

export default function Navbar() {
  return (
   <nav className="navbar fixed-top navbar-expand-lg bg-light" style={{ zIndex:"1",margin:"-1%",padding:'-1%',backgroundColor:"rgb(41, 128, 185)",color:"white"}}>
  <div className="container-fluid" style={{backgroundColor:"rgb(41, 128, 185)", color:"white",margin:"0%"}}>
    <img src={require("./qcqc1.jpg")} style={{height:"5rem",position:"relative",left:"2%"}} alt="error"></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{position:"relative",left:"55%"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{color:"white"}}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/" style={{color:"white"}}>Book Ambulance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/" style={{color:"white"}}>DIY First Aid</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/" style={{color:"white"}}>Contact Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{position:"relative"}}>
            <li><a className="dropdown-item" href="/">Advance Life Support</a></li>
            <li><a className="dropdown-item" href="/">Basic Life Support</a></li>
            <li><a className="dropdown-item" href="/">Neonatal</a></li>
            <li><a className="dropdown-item" href="/">Mortuary</a></li>
          </ul>
        </li>
        
      </ul>

    </div>
    </div>
</nav> 
  )
}
