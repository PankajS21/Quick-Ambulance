import React from 'react'
import Fade from 'react-reveal/Fade';


export default function Testimonial() {
  return (
  <div style={{margin:"0%"}}>
  <div style={{backgroundColor:"rgba(45,118,212,255)"}}>
  <div className='container-fluid' style={{ display:"flex" ,alignItems:"center", justifyContent:"center",}}>
  <h2 style={{fontSize:"5rem", color:"white"}}>Founder</h2>
  </div>
  <br/><br/><br/>
    <div className="container">
  <div className="row">
    
    <div className="col" style={{ display:"flex" ,alignItems:"center", justifyContent:"center"}}>
    <Fade bottom>
    <img src={require("./acp.png")} alt="error"></img><hr/>
    </Fade>
    </div>
    
    <div className="col">
     
      <h3 style={{color:"white"}}><b>Education</b></h3>
      <h4 style={{color:"white"}}>- The Shri Ram School, Aravali</h4>
      <h4 style={{color:"white"}}>- Stanford Pre-Collegiate Summer Program, 2021</h4><hr/>
      <h3 style={{color:"white"}}><b>Experience</b></h3>  
      <h4 style={{color:"white"}}>- Founder, Plant A tree</h4>
      <h4 style={{color:"white"}}>- COVID-19 Relief Campaign,2020</h4><hr/>
      <h3 style={{color:"white"}}><b>Passion</b></h3>
      <h4 style={{color:"white"}}>- Golf, Swimming & Formula-1</h4><br/><br/><br/><br/>
      <h5 style={{color:"white"}}>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;-Avi Chopra</h5>
    </div>
  </div>  <br/><br/><br/>
</div>
</div>
    </div>
  )
}
