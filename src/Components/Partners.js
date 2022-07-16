import React from 'react';
import Fade from 'react-reveal/Fade';

export default class Partners extends React.Component {
  render() {
    return (        
        <div style={{margin:"0%",color:"black",height:"20rem"}}>
      <div style={{justifyContent:"center",display:"flex",position:"relative",top:"1rem"}}>
        <h1 style={{color:"rgba(45,118,212,255)", fontSize:"5rem"}}>Our Partners</h1>
      </div>
      <Fade top>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{position:"relative",top:"1rem"}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require("./award1.png")} className="d-block w-100" alt="error"/>
    </div>
    <div className="carousel-item">
      <img src={require("./award2.png")} className="d-block w-100" alt="error"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</Fade>    
 </div>
    );
  }
}






