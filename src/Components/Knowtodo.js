import React from 'react'

export default function Knowtodo() {
  return (
    <div style={{margin:"0%"}}>
      <div classNameName='container-fluid' style={{color:"rgb(41, 128, 185)", textAlign:"center"}}><h1 style={{fontSize:"5rem"}}><b>Know What To Do</b></h1>
      <br></br>
      <h4 style={{color:"black"}}>Few aspects of better preparation to ease stress for user and faster turn around time, applicable
for home, office or other out-of-hospital locations</h4></div>
<div className="container-fluid" style={{textAlign:"center"}}>
  <div className="row">
    <div className="col-6 my-6" >
      <img src={require("./mm.png")} alt="error" style={{height:"14rem",padding:"2rem"}}></img><br/><br/>
      <h5>Gather all medications that the patient is<br/> taking in one spot, or have a correct, up<br/> to date list of medications available.</h5>
    </div>
    <div className="col-6 my-6">
    <img src={require("./mm2.png")} alt="error" style={{height:"14rem",padding:"2rem"}}></img><br/><br/>
    <h5>Wear very loose clothing, most often the<br/> ambulance crew will need to access<br/> the patient’s arms, chest and abdomen<br/> for examination.</h5>
    </div>
    <div className="col-6  my-6">
    <img src={require("./mm3.png")} alt="error" style={{height:"14rem",padding:"2rem"}}></img><br/><br/>
    <h5>If you have a pet, kindly ensure it is<br/> secured in a different room, to avoid<br/> interference with medical crew and<br/> equipment.</h5>
    </div>
    <div className="col-6  my-6">
    <img src={require("./mm4.png")} alt="error" style={{height:"14rem",padding:"2rem"}}></img><br/><br/>
    <h5>If you can, make sure that all furniture is<br/> moved out of the way, for the crew to<br/> bring their stretcher and equipment</h5>
    </div>
  </div>
</div>
    </div>
  )
}
