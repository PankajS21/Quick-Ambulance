import React from 'react'

export default function Features() {
  return (
    <div style={{margin:"0%"}}>
        <div className='container-fluid' style={{textAlign:"center"}}>
        <h1 style={{color:"rgba(45,118,212,255)", fontSize:"5rem"}}><b>Features</b></h1>
        </div>
        <div className="container-fluid">
  <div className="row" style={{display:'flex',textAlign:"center",padding:'1rem'}}>
    <div className="col-4 py-4">
      <img src={require("./lsg.jpg")} alt="error" style={{height:"6rem",width:"6rem"}}></img><br/>
      <h3 style={{fontsize:"5rem"}}><b>Both Advance Life Support and, Basic Life Support</b></h3>
    </div>
    <div className="col-4 py-4">
    <img src={require("./gps.jpg")} alt="error" style={{height:"6rem",width:"6rem"}}></img>
      <h3><b>Live GPS Tracking</b></h3>
    </div>
    <div className="col-4 py-4">
    <img src={require("./lo.png")} alt="error" style={{height:"6rem",width:"6rem"}}></img>
      <h3><b>Automatic Location Sharing</b></h3>
    </div>
    <div className="col-4 py-4">
    <img src={require("./cont.png")} alt="error" style={{height:"6rem",width:"6rem"}}></img>
    <h3><b>Contact details and Blood group</b></h3>
    </div>

  </div>
</div>
    </div>
  )
}
