import React from "react";
import "../pages/Skills.css";

const Skills = () => {
 return (
  <>
   <div className="skills" id="tech">
    <h1 className="tech">Tech Stack</h1>
    <div className="allIcons">
     <div>
      <img
       src="/images/nodejs-icon.svg"
       alt="node"
       height="90px"
       width="90px"
       className="icons"
      />
      <p className="techUsed">Node Js</p>
     </div>
     <div>
      <img src="/images/css.svg" alt="css" height="90px" width="90px" className="icons" />
      <p className="techUsed">CSS</p>
     </div>
     <div>
      <img
       src="/images/github.svg"
       alt="github"
       height="90px"
       width="90px"
       className="icons"
      />
      <p className="techUsed">Github</p>
     </div>
     <div>
      <img src="/images/git.png" alt="git" height="90px" width="90px" className="icons" />
      <p className="techUsed">Git</p>
     </div>
     <div>
      <img
       src="/images/html.svg"
       alt="html"
       height="90px"
       width="90px"
       className="icons"
      />
      <p className="techUsed">HTML</p>
     </div>
     <div>
      <img
       src="/images/javascript.svg"
       alt="javascript"
       height="90px"
       width="90px"
       className="icons"
      />
      <p className="techUsed">Javascript</p>
     </div>
     <div>
      <img
       src="/images/react.svg"
       alt="react"
       height="90px"
       width="90px"
       className="icons"
      />
      <p className="techUsed">React</p>
     </div>
     <div>
      <img
       src="/images/mongodb.svg"
       alt="mongodb"
       height="90px"
       width="90px"
       className="icons"
      />
      <p className="techUsed">MongoDB</p>
     </div>
     <div>
      <img
       src="/images/python.svg"
       alt="python"
       height="90px"
       width="90px"
       className="icons"
      />
      <p className="techUsed">Python</p>
     </div>
     <div className="techNames"></div>
    </div>
   </div>
  </>
 );
};

export default Skills;
