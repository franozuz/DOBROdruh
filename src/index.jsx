import React from 'react';
import Home from './Home/index';
import Test from './Test/index';
import Calculator from './Calculator/index';
import Tips from './Tips/index';
import Projects from './Projects/index';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <nav>
        <img src="/assets/img/logo.svg" alt="logo DOBROdruh"></img>
        <ul>
          <li>
            <Link to="/">Domov</Link>
          </li>
          <li>
            <Link to="/test/1">Test</Link>
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
        <Route path="/test/:id?">
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
      <footer>
        &copy; Made by traWELLers Júlia and Zuzana with great support of Jindra
        and the team of Czechitas in 2021
      </footer>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
