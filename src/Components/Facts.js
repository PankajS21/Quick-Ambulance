import React from 'react'

export default function Facts() {
  return (
    <>
    <div className='container-fluid' style={{backgroundColor:"rgb(41, 128, 185)"}}>
     <div style={{ display:"flex" ,alignItems:"center", justifyContent:"center",color:"rgb(41, 128, 185)"}}>
      <h1 style={{fontSize:"5rem", color:"white"}}>Important Facts</h1>
      </div >
  <div className="row" style={{ display:"flex", justifyContent:"center"}}> &ensp; &ensp; &ensp; &ensp; &ensp; 
    <div className="col">    <br/><br/>
    <h2 style={{color:"white"}}><b>1. Jumping the signal:</b></h2> Signals are one of the major causes that result in delayed transportation of the patient. Hence ambulances are allowed to jump the red signal. Nevertheless, this can only be achieved if the ambulance is given way to pass through, right? This bit of duty lies with the public, the duty to ensure that vehicles are moved towards the left. In case of extreme traffic, the traffic police can block all other roadways despite the green signal and let the lane which has the ambulance pass through.
    <h2 style={{color:"white"}}><b>2. Obstructions are a NO-NO:</b></h2> Obstructing an ambulance means unnecessary wastage of the ‘Golden Hour’. It is not only inhuman but also legally inadvisable to do so. If anyone obstructs the path of the ambulance, or parks in front of it without giving way, they can be fined for INR 2,000.  
    <h2 style={{color:"white"}}><b>3. Taking the wrong-side:</b></h2> If the traffic is jammed and an ambulance cannot move forward, they have the right to take a U-turn and take the wrong side. This is one of the reasons why the public should not tailgate an ambulance so that it has enough space to turn back and change its route if there’s a jam ahead.
    <h2 style={{color:"white"}}><b>4. Stopping the VIPs:</b></h2> Every ambulance has the right to pass through even if the entire traffic is held up during a VIP visit. The VIP vehicles should be asked to stop and the lane which has the ambulance needs to be allowed to move.
    </div>
    <div className="col" style={{ display:"flex" ,alignItems:"center", justifyContent:"end", width:"100rem", height:"45rem"}}>
    <div className="container">
  <div className="row">
    <div className="col-12"> 
    &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;<img src={require("./ss5.png")} alt="error" style={{width:"22rem",height:"22rem"}}></img>
  
    </div>
    <div className="col-12">
    &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; <img src={require("./ss5a.png")} alt="error" style={{width:"22rem",height:"22rem"}}></img>

    </div>
  </div>
</div>
    </div>
  </div><br/><br/>
</div>
    <div>
    </div>
    </>
  )
}
