import React from "react";
import "../pages/Work.css";
import Quiz from "../images/quiz.jpg";
import bookcase from "../images/bookcase.JPG";
import eggshells from "../images/welcome.jpg";
import VideoPlayer from "react-video-js-player";
// import intro from "../videos/ezgif.com-gif-maker (1).mp4";

const Work = () => {
 return (
  <>
   <div className="mainport">
    <h1 className="portfolio">My Portfolio</h1>
    <div className="work">
     <div class="card" style={{ width: "18rem" }}>
      <h5 class="card-title">Eggsshells</h5>
      <img class="card-img-top" src={eggshells} alt="Quiz" />
      {/* <VideoPlayer
      src={videoSrc}
      width="285"
      height="150"
      muted={true}
      loop={true}
      playing={true}
     /> */}
      <div class="card-body">
       <p class="card-text">
        A full stack app where users can serach, rate, review and contact local
        childcare providers
       </p>
      </div>
      <div class="card-body">
       <a href="/demo" target="_blank" class="card-link">
        Live demo
       </a>
       <a
        href="https://github.com/lbrowncoder/black-codher-personal-project"
        target="_blank"
        class="card-link"
       >
        Github
       </a>
       <p className="listTech">Technologies Used</p>
       <ul className="used">
        <li>React</li>
        <li>Nodejs</li>
        <li>mongodb</li>
       </ul>
      </div>
     </div>

     <div class="card" style={{ width: "18rem" }}>
      <h5 class="card-title">Bookshop</h5>
      <img class="card-img-top" src={bookcase} alt="Card image cap" />
      <div class="card-body">
       <p class="card-text">
        Using Google API, customers can search for their favourite books and
        store them in their own bookcase
       </p>
      </div>
      <div class="card-body">
       <a
        href="https://lbbookshop.netlify.app/"
        target="_blank"
        class="card-link"
       >
        Live demo
       </a>
       <a
        href="https://github.com/lbrowncoder/bookcase"
        target="_blank"
        class="card-link"
       >
        Github
       </a>
       <p className="listTech">Technologies Used</p>
       <ul className="used">
        <li>API</li>
        <li>CSS</li>
        <li>JavaScript</li>
       </ul>
      </div>
     </div>

     <div class="card" style={{ width: "18rem" }}>
      <h5 class="card-title">Quiz</h5>
      <img class="card-img-top" src={Quiz} alt="Quiz" />
      <div class="card-body">
       <p class="card-text">
        Interactive quiz testing the users general knowledge
       </p>
      </div>
      <div class="card-body">
       <a href="https://lbquiz.netlify.app/" target="_blank" class="card-link">
        Live demo
       </a>
       <a
        href="https://github.com/lbrowncoder/Quiz"
        target="_blank"
        class="card-link"
       >
        Github
       </a>
       <p className="listTech">Technologies Used</p>
       <ul className="used">
        <li>CSS</li>
        <li>JavaScript</li>
        <li>HTML</li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Work;
