import React from "react";
import "../pages/Contact.css";

const Contact = () => {
 return (
  <div className="contact" id="contact">
    <p className="connect">Connect with me</p>
   <div className="location">
    <img
     src="/images/location.svg"
     alt="location"
     height="40px"
     width="40px"
     className="contactIcon"
    />
    <p className="midlands">West Midlands, England</p>
   </div>
   <div className="social">
    <a href="https://www.linkedin.com/in/lamara-brown" target="_blank" rel="noreferrer">
     <img
      src="/images/linkedin.svg"
      alt="linked In"
      height="80px"
      width="80px"
      className="contactIcon"
     />
    </a>
    <a href="https://github.com/lbrowncoder" target="_blank" rel="noreferrer">
     <img
      src="/images/github.svg"
      alt="Github"
      height="80px"
      width="80px"
      className="contactIcon"
     />
    </a>
    <a href="mailto:lbrown22@hotmail.co.uk" target="_blank" rel="noreferrer">
     <img
      src="/images/message.svg"
      alt="email"
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
