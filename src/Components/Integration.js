import React from 'react';
import Fade from 'react-reveal/Fade';

export default class Integration extends React.Component {
  render() {
    return (        
        <div style={{margin:"0%"}}>
      <div style={{justifyContent:"center",display:"flex"}}>
        <h1 style={{fontSize:"5vw"}}>Quick Integration with UP-108</h1>
      </div><br/>
   <div className="row">
<Fade top>
   <div className="col-lg-12" style={{justifyContent:"center",display:"flex"}}>
     <img src={require("./acopy2.png")} alt="error" ></img>
   </div>
   </Fade>
   <Fade right>
     <div className="col-2">
       <img src={require("./a.png")} alt="error"></img>
     </div>
     
     <div className="col-2">
       <img src={require("./b.png")} alt="error"></img>
     </div>
     <div className="col-2">
       <img src={require("./c.png")} alt="error"></img>
     </div>
     <div className="col-2">
       <img src={require("./d.png")} alt="error"></img>
     </div>
     <div className="col-2">
       <img src={require("./e.png")} alt="error"></img>
     </div>
     <div className="col-2">
       <img src={require("./f.png")} alt="error"></img>
     </div>
     </Fade>

     <Fade left>
     <div className="col-2">
       <img src={require("./g.png")} alt="error"></img>
     </div>
     <div className="col-2">
       <img src={require("./h.png")} alt="error"></img>
     </div>
     <div className="col-2">
       <img src={require("./i.png")} alt="error"></img>
     </div>
     <div className="col-2">
       <img src={require("./m.png")} alt="error"></img>
     </div>
     <div className="col-2">
       <img src={require("./n.png")} alt="error"></img>
     </div>
     <div className="col-2">
       <img src={require("./o.png")} alt="error"></img>
     </div>
     </Fade>
   </div>
 </div>
    );
  }
}






