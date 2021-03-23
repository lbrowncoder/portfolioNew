import React, { useState } from "react";
import { Link } from "react-scroll";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import "../components/Navbar.css";

const NavBar = () => {
 const [navLinkOpen, navLinkToggle] = useState(false);

 const handleLinkToggle = () => {
  navLinkToggle(!navLinkOpen);
 };

 const renderClasses = () => {
  let classes = "list";
  if (navLinkOpen) {
   classes += "active";
  }
  return classes;
 };

//  const renderOpenClasses = () => {
//     let open = "list";

//  if (navLinkOpen < breakpoint)  {
//     return open
//   }
// };

 return (
  <div>
   <nav className="nav">
     <p className="brown">Lamara Brown</p>
    <ul className={renderClasses()}>
     <li className="links" id="links">
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
    <div onClick={handleLinkToggle} className="hamburgerToggle">
     {/* <i className="fas fa-bars fa-lg"></i> */}
     <FaIcons.FaBars className="bars" size="55px" />
     <ImIcons.ImCross size="25px" className="cross" />
    </div>
   </nav>
  </div>
 );
};

export default NavBar;

// import React from "react";
// import { Link } from "react-scroll";
// import "../components/Navbar.css";
// import * as FaIcons from "react-icons/fa";

// const NavBar = () => {
//  return (
//    <nav className="navbar">
//     <div class="container">
//      <a class="navbar-brand text-white" href="#">
//       Lamara Brown
//      </a>
//      <ul className="navbar-nav">
//          <button className="hamburger">
//          <FaIcons.FaBars className="hamburger" size='25px' />
//          </button>
//       <li id="links">
//        <Link
//         activeClass="active"
//         to="home"
//         spy={true}
//         smooth={true}
//         offset={0}
//         duration={500}
//        >
//         Home
//        </Link>
//       </li>
//       <li className="links">
//        <Link
//         activeClass="active"
//         to="about"
//         spy={true}
//         smooth={true}
//         offset={0}
//         duration={500}
//        >
//         About
//        </Link>
//       </li>
//       <li className="links">
//        <Link
//         activeClass="active"
//         to="work"
//         spy={true}
//         smooth={true}
//         offset={0}
//         duration={500}
//        >
//         Portfolio
//        </Link>
//       </li>
//       <li className="links">
//        <Link
//         activeClass="active"
//         to="tech"
//         spy={true}
//         smooth={true}
//         offset={0}
//         duration={500}
//        >
//         Tech Stack
//        </Link>
//       </li>

//       <li className="links">
//        <Link
//         activeClass="active"
//         to="contact"
//         spy={true}
//         smooth={true}
//         offset={0}
//         duration={500}
//        >
//         Contact
//        </Link>
//       </li>
//      </ul>
//     </div>
//    </nav>
//  );
// };

// export default NavBar;
