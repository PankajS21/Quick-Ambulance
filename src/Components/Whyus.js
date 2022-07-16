import React from 'react'

export default function Whyus() {
  return (  
    <div className="container-fluid" style={{backgroundColor:"rgba(45,118,212,255)",width:"100%"}}>
      <br/>
        <div className='container-fluid' style={{textAlign:"center", color:"black"}}>
        <h1 style={{fontSize:"4rem",color:"whitesmoke"}}><b>What Services we offer?</b></h1>
        <div className="container-fluid">
        <br/><br/>
  <div className="row" style={{position:"relative",left:"27px"}}>
    
    <div className="col">
    <div className="card" style={{width: "20rem"}}>
        <img src={require("./saa.png")} alt="error" style={{height:"10rem"}}></img><br/>  <div className="card-body">
    <h5 className="card-title" style={{color:"rgba(45,118,212,255)"}}><b>SaaS Model</b></h5><hr/>
    <p className="card-text" style={{height:"9rem"}}>Integrating our platform with the existing platform of a hospital or ambulance service provider.<br/>If,the hospital doesn't have an existing platform we can even white label.</p>
    <a href="/" className="btn btn-primary" onClick={(e)=>{e.preventDefault()}}>Enquire Now</a>
  </div>
  </div>
      </div>
      <div className="col">
    <div className="card" style={{width: "20rem"}}>
        <img src={require("./loc.png")} alt="error" style={{height:"10rem",backgroundColor:"rgba(45,118,212,255)"}}></img><br/>  <div className="card-body">
    <h5 className="card-title" style={{color:"rgba(45,118,212,255)"}}><b>GPS Tracking Enabled</b></h5><hr/>
    <p className="card-text" style={{height:"9rem"}}>Customer downloads the application and connect with nearest ambulance and pay per trip charges.</p>
    <a href="/" className="btn btn-primary" onClick={(e)=>{e.preventDefault()}}>Enquire Now</a>
  </div>
  </div>
      </div>
      <div className="col">
    <div className="card" style={{width: "20rem"}}>
        <img src={require("./am.jpg")} alt="error" style={{height:"10rem"}}></img><br/>  <div className="card-body">
    <h5 className="card-title" style={{color:"rgba(45,118,212,255)"}}><b>Leased Ambulance Model</b></h5><hr/>
    <p className="card-text" style={{height:"9rem"}}>Target Big MNC's and societies and provide full time ambulance services.</p>
    <a href="/" className="btn btn-primary" onClick={(e)=>{e.preventDefault()}}>Enquire Now</a>
  </div>
  </div>
      </div>
  </div><br/>
</div>
  </div><br/>
     
    </div>
  )
}
