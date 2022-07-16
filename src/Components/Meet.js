import React from 'react'
import Fade from 'react-reveal/Fade';


export default function Meet() {
  return (
   <div>
      <Fade right>
      <div className="container-fluid" >
  <div className="row" style={{display:"flex", textAlign:"center"}}>
    <div className="col" style={{position:"relative",top:"9rem",left:"3rem"}}>
        <h1 style={{color:"rgba(45,118,212,255)",fontSize:"6rem"}}>Quick Medic</h1>
     <h2 style={{display:"inline"}}>Get our app now:</h2>
     <a href='https://play.google.com/store/apps/details?id=com.quick_medic'><img src={require("./play.png")} style={{position:"relative",height:"3rem",width:"9rem",bottom:"5px",left:"7px", display:"inline"}} alt="error"></img></a>

    </div>
    <div className="col" style={{position:"relative",top:"3rem",left:"4rem"}}>

      <img src={require("./finalimg.png")} style={{height:"29rem",width:"17rem"}} alt=""></img>
    </div>
  </div>
</div>
</Fade>
</div>
  )
}
