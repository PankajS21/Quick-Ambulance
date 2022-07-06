import React from 'react'
import Fade from 'react-reveal/Fade';


export default function Meet() {
  return (
   <div>
      <Fade right>
      <div className="container-fluid" >
  <div className="row" style={{display:"flex", textAlign:"center"}}>
    <div className="col" >
        <br/><br/><br/><br/><br/><br/> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        <h1 style={{color:"rgb(41, 128, 185)",fontSize:"6rem"}}>Quick Medic</h1>
      <h4>Quick Medic is a user friendly way to request and track ambulances close to you.</h4>

      <button type="button" className="btn " style={{backgroundColor:"rgb(41, 128, 185)",color:"white"}}>Book Ambulance</button>

    </div><br/><br/><br/>
    <div className="col" style={{position:"relative",top:"3rem",left:"4rem"}}>

      <img src={require("./scramb.png")} style={{height:"33rem",width:"25rem"}} alt=""></img>
    </div>
  </div>
</div>
</Fade>
</div>
  )
}
