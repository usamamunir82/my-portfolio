import React from "react";
import './footer.css'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";



function Footer() {
  return (
    <div className="container">
      <div className="footerContainer">
        <div className="footerContent">
          <h2>Get in Touch</h2>
          <p className="footerContentPara">For business and partnership inquiry please contact me below!</p>
          <div className="detailAdressBox">
            <div className="detailsBox">
              <div className="footerIconBox"><FiPhoneCall className="footerIcon"/></div>
              <div>
                <p className="footerInfo">Phone</p>
                <p className="footerNo">0899-3415-875</p>
              </div>
            </div>
            <div className="detailsBox">
              <div className="footerIconBox"> <MdOutlineEmail className="footerIcon"/> </div>
              <div>
                <p className="footerInfo">Email</p>
                <p className="footerNo">dimasarsmith@gmail.com</p>
              </div>
            </div><div className="detailsBox">
              <div className="footerIconBox"> <AiOutlineHome className="footerIcon"/> </div>
              <div>
                <p className="footerInfo">Address</p>
                <p className="footerNo">Griya Japan Raya Tahap 4 B2/01, Sooko, Mojokerto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
