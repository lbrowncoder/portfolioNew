import React from "react";
import "../pages/Home.css";
import Typical from "react-typical";
import comp from "../images/comp.jpg";

const Home = () => {
 return (
  <>
   <div className="comp" id="home">
    <div className="homePage" >
    <div className="text-container">
     <p className="hello">Hello</p>
     <h2 className="name">My name is Lamara</h2>
     <p className="im">
      {" "}
      I'm a{" "}
      <Typical
       steps={["Full Stack Developer", 1000, "Video Editor", 1000]}
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
