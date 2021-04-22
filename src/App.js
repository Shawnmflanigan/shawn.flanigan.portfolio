import React from "react";
import About from './pages/About'
import Portfolio from './pages/Portfolio'
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
      </div>
    </Router>
  )
}

export default App;
