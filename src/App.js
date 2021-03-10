import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import EggshellsDemo from "./pages/EggshellsDemo";

const App = () => {
 return (
  <Router>
   <Switch>
    <Route
     exact
     path="/"
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <Navbar />
       <Home />
       <About />
       <Work />
       <Skills />
       <Contact />
      </React.Fragment>
     )}
    />
    <Route
     exact
     path="/demo"
     render={() => (
      <React.Fragment>
       <ScrollToTop />
       <EggshellsDemo />
      </React.Fragment>
     )}
    />
   </Switch>
  </Router>
 );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
