import React from 'react';
import ReactDOM from 'react-dom/client';
import Applic from './Components/Applic';
import Awards from './Components/Awards';
import Facts from './Components/Facts';
import Features from './Components/Features';
import Integration from './Components/Integration';
import Knowtodo from './Components/Knowtodo';
import Last from './Components/Last';
import Meet from './Components/Meet';
import Navbar from './Components/Navbar';
import Testimonial from './Components/Testimonial';
import Whyus from './Components/Whyus';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div>
      <header>
    <Navbar/><br/><br/>
    </header>
    <Meet/><br/><br/><br/><br/>
    <Whyus/><br/><br/>
    <Features/><br/><br/><br/><hr/>
    <Facts/><hr/>
    <Knowtodo/><hr></hr><br/><br/><br/>
    <Integration/><br/><br/><br/><hr/>
    <Awards/><br/><br/>
    <Testimonial/><br/><br/><br/>
    {/* <Applic/><br/> */}
    <footer>
    <Last/>
    </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
