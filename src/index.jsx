import React from 'react';
import Home from './Home';
import Test from './Test';
import CO2Calculator from './CO2Calculator';
import Tips from './Tips';
import Projects from './Projects';
import Result from './Test/Result';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <nav>
        <img src="/assets/img/logo_DOBROdruh.svg" alt="logo DOBROdruh" />
        <div className="title">DOBROdruh</div>
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
        <Route path="/test/result">
          <Result />
        </Route>
        <Route path="/test/:id?">
          <Test />
        </Route>
        <Route path="/calculator">
          <CO2Calculator />
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
