import React from "react";
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import MenuAppBar from './components/MenuAppBar'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <MenuAppBar />
      <div>
        <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component = {Portfolio} />
          <Route exact path="/resume" component = {Resume} />
      </div>
    </Router>
  )
}

export default App;
