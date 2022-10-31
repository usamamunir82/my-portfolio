import React from "react";
import helobuds from '../../assets/images/helobuds.png'
import './helobuds.css'
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { BsFacebook} from "react-icons/bs";

function HeloBuds() {
  return (
    <div className="container">
      <div className="heloBudsContainer">
        <div className="helobudsContent">
          <h3>Hello Buds</h3>
          <h2>I am<span className="diamas"> Usama Munir</span></h2>
          <p className="Ui">Front-End Developer with ReactJS</p>
          <div className="heloBorder"></div>
          <p>
            I'm a person who has a keen interest in the design layout. I think
            presenting an attractive design is a matter of concern in developing
            a branding of products. To creates a good design, I focus on proper
            composition and visual decoration details in order to make it more
            professional. For the time being, I’m developing the skill for
            acquiring the UI/UX design for dynamic application and web
            development.
          </p>
          <div className="helobudsButon">
            <div className="downloadCv">
            <button>Download CV</button></div>
           <div className="More"> <button>More</button></div>
          </div>
        </div>
        <div className="helobudsImg">

            <img src={helobuds} alt="heloobuds" />
        
        </div>
        
      </div>
      <div className="icons">
              
              <p>Find Me On</p>
              <div><BsFacebook className="facebook"/></div>
            <div>  <BsInstagram className="facebook"/></div>
            <div>  <FaLinkedinIn className="facebook"/></div>
             <div> <ImWhatsapp className="facebook"/></div>

          </div>
    </div>
  );
}

export default HeloBuds;
