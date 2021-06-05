import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return <h2>Domov</h2>;
}

const Test = () => {
  return <h2>Test</h2>;
}

const Calculator = () => {
  return <h2>CO2 Kalkulačka</h2>;
}

const Tips = () => {
  return <h2>Cestovatelské tipy</h2>;
}

const Projects = () => {
  return <h2>Eko projekty</h2>;
}



const App = () => {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Domov</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/calculator">CO2 Kalkulačka</Link>
          </li>
          <li>
            <Link to="/tips">Cestovatelské tipy</Link>
          </li>
          <li>
            <Link to="/projects">EKO projekty</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/tips">
          <Tips />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  )
};

render(<App />, document.querySelector('#app'));
