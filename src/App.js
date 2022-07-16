// import logo from './logo.svg';
import './App.css';
import Whyus from './Components/Whyus';
import Features from './Components/Features';
// import Knowtodo from './Components/Knowtodo';
import Meet from './Components/Meet';
import Facts from './Components/Facts';
import Integration from './Components/Integration';
// import Last from './Components/Last';
// import Navbar from './Components/Navbar';
import Partners from './Components/Partners';
import Testimonial from './Components/Testimonial';
// import {BrowserRouter} from 'react-router-dom'
import {useRef} from 'react'
import React from "react";

import Contact from './Components/Contact';

function App() {
  const services=useRef(null);
  const partners=useRef(null);
  const features=useRef(null);
  const founder=useRef(null);
  const integration=useRef(null);
  const contact=useRef(null);

  const sts=(elementRef)=>{
window.scrollTo({
  top:elementRef.current.offsetTop-80,
  behavior: 'smooth'
})
  }
  return (
    <>
    <div className='main sticky-top'>
      
    <div className='hero'>
    <img src={require("./qcqc1.jpg")} alt="error" style={{height:"5rem",width:'6rem'}}></img>
    <ul style={{position:"relative",bottom:"55px",left:"42rem"}}>
      <li className='link' onClick={()=>{sts(services)}}>Services</li>     
      <li className='link' onClick={()=>{sts(partners)}}>Partners</li>
      <li className='link' onClick={()=>{sts(features)}}>Features</li>
      <li className='link' onClick={()=>{sts(founder)}}>Founder</li>
      <li className='link' onClick={()=>{sts(integration)}}>Integration</li>
      <li className='link' onClick={()=>{sts(contact)}}>Contact Us</li>
    </ul>
    </div>
  </div>
    {/* <Navbar/><br/><br/> */}
    <Meet/><br/><br/><br/><br/>
    <div ref={services} className='services'>
      <Whyus/>
    </div><br/><br/>
    <div ref={partners} className='partners'>
      <Partners/>
    </div><br/><br/><br/><br/>
    <div ref={features} className='features'>
      <Features/>
    </div><br/><br/><br/>
    <div ref={founder} className='founder'>
      <Testimonial/>
    </div><br/><br/><br/>
    <Facts/><hr/>
    <div ref={integration} className='integration'>
      <Integration/><hr/><br/><br/><br/><br/>
    </div>
    <div ref={contact} className='contact' style={{height:"33rem",width:"50rem", backgroundColor:"rgba(45,118,212,255)",position:"relative",left:"17rem",padding:"2rem"}}>
    <h1 style={{color:"white",fontSize:"5rem",position:"relative",top:"-1rem"}}>Contact us</h1><hr style={{color:"white",position:"relative",bottom:"2rem"}}/>
    <div style={{height:"30rem",width:"43rem",display:"flex",position:"relative",left:"1rem"}}>
    <Contact/>
    </div>
    </div><br/><br/><br/><br/>
    <div className="container-fluid" style={{backgroundColor:"rgba(45,118,212,255)"}}>
  <div className="row" style={{display:"flex", justifyContent:"space-evenly"}}>
    <div className="col"><br/>
      <h2 style={{color:'white'}}><b>Sitemap<hr/></b></h2>
      <>
      <li className="list-group-item"><h5 style={{color:"white"}}>
      <tbody>
          <tr>
            {/* <td>
              <img src={require("./services2.png")} alt="error" style={{height:"1.5rem",position:"relative",bottom:"4px"}}></img>
              </td> */}
            <td>
            <li className="list-group-item"><h5 style={{color:"white",cursor:"pointer"}} onClick={()=>{sts(services)}}>&#8680; Services</h5></li>             
            </td>
          </tr>
        </tbody>
        </h5></li>
  <li className="list-group-item"><h5 style={{color:"white"}}>
  <tbody>
          <tr>
            <td>
              {/* <img src={require("./partners.png")} alt="error" style={{height:"1.5rem",position:"relative",bottom:"4px"}}></img> */}
            </td>
            <td>
            <li className="list-group-item"><h5 style={{color:"white",cursor:"pointer"}}  onClick={()=>{sts(partners)}}>&#8680; Partners</h5></li>             
            </td>
          </tr>
        </tbody>
    </h5></li>
  <li className="list-group-item"><h5 style={{color:"white"}}>
  <tbody>
          <tr>
            <td>
              {/* <img src={require("./feature.png")} alt="error" style={{height:"1.5rem",position:"relative",bottom:"4px"}}></img> */}
            </td>
            <td>
            <li className="list-group-item"><h5 style={{color:"white",cursor:"pointer"}} onClick={()=>{sts(features)}}>&#8680; Features</h5></li>             
            </td>
          </tr>
        </tbody>
        </h5></li>
  <li className="list-group-item"><h5 style={{color:"white"}}>
  <tbody>
          <tr>
            <td>
              {/* <img src={require("./found.png")} alt="error" style={{height:"1.5rem",position:"relative",bottom:"4px"}}></img> */}
            </td>
            <td>
            <li className="list-group-item"><h5 style={{color:"white",cursor:"pointer"}} onClick={()=>{sts(founder)}}>&#8680; Founder</h5></li>             
            </td>
          </tr>
        </tbody>
        </h5></li>
  <li className="list-group-item"><h5 style={{color:"white"}}>
  <tbody>
          <tr>
            <td>
              {/* <img src={require("./integr.png")} alt="error" style={{height:"1.5rem",position:"relative",bottom:"4px"}}></img> */}
            </td>
            <td>
            <li className="list-group-item"><h5 style={{color:"white",cursor:"pointer"}} onClick={()=>{sts(integration)}}>&#8680; Integration</h5></li>             
            </td>
          </tr>
        </tbody>
    </h5></li>
  <li className="list-group-item"><h5 style={{color:"white"}}>
  <tbody>
          <tr>
            <td>
              {/* <img src={require("./phones2.png")} alt="error" style={{height:"1.5rem",position:"relative",bottom:"4px"}}></img> */}
            </td>
            <td>
            <li className="list-group-item"><h5 style={{color:"white",cursor:"pointer"}} onClick={()=>{sts(contact)}}>&#8680; Contact us</h5></li>             
            </td>
          </tr>
        </tbody>
    </h5></li>
</>
    </div>
    <div className="col"><br/>
      <h2 style={{color:'white'}}><b>Follow us on<hr/></b></h2>
      <>
        <tbody>
          <tr>
            <td>
              <img src={require("./fb1.png")} alt="error" style={{height:"1.5rem",position:"relative",bottom:"4px"}}></img>
            </td>
            <td>
        <a href='https://www.facebook.com/QuickMedic.net/'><li className="list-group-item"><h5 style={{color:"white"}}> Facebook</h5></li></a>                 
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <img src={require("./ins.png")} alt="error" style={{height:"1.5rem",position:"relative",bottom:"4px"}}></img>
            </td>
            <td>
            <a href='https://www.instagram.com/quick_medic_services/'><li className="list-group-item"><h5 style={{color:"white"}}> Instagram</h5></li></a>   
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <img src={require("./linked.png")} alt="error" style={{height:"1.5rem",position:"relative",bottom:"4px"}}></img>
            </td>
            <td>
            <a href='https://in.linkedin.com/in/quick-medic-69aa83187'><li className="list-group-item"><h5 style={{color:"white"}}> LinkedIn</h5></li></a>             
            </td>
          </tr>
        </tbody>
</>
    </div>
    <div className="col"><br/>
      <h2 style={{color:'white'}}><b>Get In Touch<hr/></b></h2>
      <>
      <tbody>
          <tr>
            <td>
              <img src={require("./addr2.png")} alt="error" style={{height:"32px",position:"relative",bottom:"21px"}}></img>
            </td>
            <td>
            <li className="list-group-item"><h5 style={{color:"white"}}> Corporate Office: Plot No.31, Sector-18, Udyog Vihar-IV, Near Passport Office, Gurugram, Haryana-122015</h5></li>             
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <img src={require("./phones2.png")} alt="error" style={{height:"30px",position:"relative",bottom:"3px"}}></img>
            </td>
            <td>
            <li className="list-group-item"><h5 style={{color:"white"}}>+91-9810399074</h5></li>             
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <img src={require("./message2.png")} alt="error" style={{height:"32px",position:"relative",bottom:"3px"}}></img>
            </td>
            <td>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@quickmedicservices.com" target="_blank"><li className="list-group-item"><h5 style={{color:"white"}}> info@quickmedicservices.com</h5></li></a>    
            </td>
          </tr>
        </tbody>
</>
    </div>
  </div>
  <hr/>
  <div className='container-fluid' style={{color:"white", display:"flex", alignItems:"center",justifyContent:"center"}}>
  <b>&copy; 2022 Quick Medic Services LLP.All Rights Reserved</b><br/><br/>
  </div>
</div>    </>
  );
}

export default App;
