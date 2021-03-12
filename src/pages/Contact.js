import React from "react";
import "../pages/Contact.css";

const Contact = () => {
 return (
  <div className="contact" id="contact">
    <p className="connect">Connect with me</p>
   <div className="location">
    <img
     src="/images/location.svg"
     height="40px"
     width="40px"
     className="contactIcon"
    />
    <p className="midlands">West Midlands, England</p>
   </div>
   <div className="social">
    <a href="https://www.linkedin.com/in/lamara-brown" target="_blank">
     <img
      src="/images/linkedin.svg"
      height="80px"
      width="80px"
      className="contactIcon"
     />
    </a>
    <a href="https://github.com/lbrowncoder" target="_blank">
     <img
      src="/images/github.svg"
      height="80px"
      width="80px"
      className="contactIcon"
     />
    </a>
    <a href="mailto:lbrown22@hotmail.co.uk" target="_blank">
     <img
      src="/images/message.svg"
      height="80px"
      width="80px"
      className="contactIcon"
     />
    </a>
   </div>
  </div>
 );
};

export default Contact;
