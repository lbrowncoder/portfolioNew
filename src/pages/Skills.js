import React from 'react';
import '../pages/Skills.css'

const Skills = () => {
    return (
        <>
        <div className="skills" id='tech'>
            <p className="tech">Technologies Used</p>
            <div className="allIcons">
            <div>
            <img src="/images/nodejs-icon.svg"  height='90px' width='90px' className="icons" /> 
            <p className="techUsed">Node Js</p>
            </div> 
            <div>
            <img src="/images/css.svg" height='90px' width='90px'  className="icons" /> 
            <p className="techUsed">CSS</p>
            </div>
            <div> 
            <img src="/images/github.svg" height='90px' width='90px' className="icons" />
            <p className="techUsed">Github</p>
            </div>
            <div>  
            <img src="/images/git.png" height='90px' width='90px' className="icons" />
            <p className="techUsed">Git</p>
            </div>
            <div>
            <img src="/images/html.svg" height='90px' width='90px' className="icons" />  
            <p className="techUsed">HTML</p>
            </div>
            <div>  
            <img src="/images/javascript.svg" height='90px' width='90px' className="icons" /> 
            <p className="techUsed">Javascript</p>
            </div>
            <div> 
            <img src="/images/react.svg" height='90px' width='90px' className="icons" /> 
            <p className="techUsed">React</p>
            </div>
            <div> 
            <img src="/images/mongodb.svg" height='90px' width='90px' className="icons" />  
            <p className="techUsed">MongoDB</p>
            </div>
            <div>
            <img src="/images/python.svg" height='90px' width='90px' className="icons" />  
            <p className="techUsed">Python</p>
            </div>
            <div className="techNames">
            </div>
            </div>
        </div>
        </>

    )
}

export default Skills
