import React from "react";
import { Link, Element } from "react-scroll";
import "../components/Navbar.css";

const NavBar = () => {
 return (
  <div class="navbar-static-top">
   <nav class="navbar navbar-expand-lg p-3 mb-2 bg-secondary fixed-top">
    <div class="container">
     <a class="navbar-brand text-white" href="#">
      Lamara Brown
     </a>
     <ul class="navbar-nav">
      <li className="links">
       <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
       >
        Home
       </Link>
      </li>
      <li className="links">
       <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
       >
        About
       </Link>
      </li>

      <li className="links">
       <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
       >
        Portfolio
       </Link>
      </li>
      <li className="links">
       <Link
        activeClass="active"
        to="tech"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
       >
        Tech Stack
       </Link>
      </li>

      <li className="links">
       <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
       >
        Contact
       </Link>
      </li>
     </ul>
    </div>
   </nav>
  </div>
 );
};

export default NavBar;
