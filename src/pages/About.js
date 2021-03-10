import React from "react";
import "../pages/About.css";

export const About = () => {
 return (
  <div id="about">
   <div className="about">
    <h1 className="me">About Me</h1>
    <p className="bootcamp">
     In 2020 I made the decision to enroll on the Black codher bootcamp in order
     to further my love for technology. Here I got to chance to learn multiple
     coding languages and meet other like minded individuals who were also
     shared my ethamiusm for technology.
    </p>
    <p className="role">
     Now I am hoping to find my first role as a full stack developer. I am
     excited to find a role where I am continually learning in order to expand
     my skillset.{" "}
    </p>
    <div className="cv">
     <a href="./docs/lbrowncv.pdf" target="_blank">
      <button type="button" class="btn btn-outline-secondary" type="submit">
       Download CV
      </button>
     </a>
    </div>
   </div>
  </div>
 );
};

export default About;
