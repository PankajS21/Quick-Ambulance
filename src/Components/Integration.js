import React from 'react';
import Fade from 'react-reveal/Fade';

export default class Integration extends React.Component {
  render() {
    return (        
        <div style={{margin:"0%",backgroundColor:"rgba(45,118,212,255)",color:"white",height:"38rem"}}>
      <div style={{justifyContent:"center",display:"flex",position:"relative",top:"1rem"}}>
        <h1 style={{fontSize:"5vw"}}>Quick Integration with UP-108</h1>
      </div>
      <Fade top>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{position:"relative",top:"1rem"}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require("./c1.png")} className="d-block w-100" alt="error"/>
    </div>
    <div className="carousel-item">
      <img src={require("./c2.png")} className="d-block w-100" alt="error"/>
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
<div style={{justifyContent:"center",display:"flex",position:"relative",top:"2rem"}}>
        <h1 style={{fontSize:"5vw"}}>With Haryana & Maharashtra Govt.</h1>
      </div>
      <Fade bottom>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{position:"relative",top:"2rem"}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require("./c1a.png")} className="d-block w-100" alt="error"/>
    </div>
    <div className="carousel-item">
      <img src={require("./c2a.png")} className="d-block w-100" alt="error"/>
    </div>
  </div>
  <button className="carousel-control-prev a" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next a" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</Fade>
      
 </div>
    );
  }
}






