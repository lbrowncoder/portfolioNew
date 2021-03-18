import React from "react";
import "../pages/Home.css";
import Typical from "react-typical";
// import comp from "../images/comp.jpg";

const Home = () => {
 return (
  <>
   <div className="comp" id="home">
    <div className="homePage" >
    <div className="text-container">
     <p className="hello">Hello</p>
     <p className="name">My name is Lamara</p>
     <p className="im">
      {" "}
      I'm a{" "}
      <Typical
       steps={["Full Stack Developer", 2000, "Video Editor", 2500]}
       loop={Infinity}
       wrapper="b"
       className="job"
      />
     </p>
     </div>
    </div>
   </div>
  </>
 );
};

export default Home;
