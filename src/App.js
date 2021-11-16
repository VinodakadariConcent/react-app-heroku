import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Travel from "./components/pages/Travel";
import Music from "./components/pages/Music";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/travel" component={Travel} />
          <Route path="/music" component={Music} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
