import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Languages from "./components/Languages"
import BreakLine from "./components/BreakLine"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Form from "./components/Form"


// Styles & Bootstrap

import "./style/style.css"
import "./style/main-background.jpg"



function App() {

  return (
    <Router>
  
      <div className="App">
        <Navigation />

        <Switch>
          <Route path="/" exact>
         
            <Main />
            <About />
            <BreakLine />
            <Languages />
            <BreakLine />
            <Projects />
            <Contact />
     
          </Route>
          <Route path="/api/sendmail" exact>
            <Form />
          </Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;

