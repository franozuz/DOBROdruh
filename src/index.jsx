import React from 'react';
import Home from './Home';
import Test from './Test';
import CO2Calculator from './CO2Calculator';
import Tips from './Tips';
import Projects from './Projects';
import Result from './Test/Result';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      {/* <nav>
        <img src="/assets/img/logo_DOBROdruh.svg" alt="logo DOBROdruh" />
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
      </nav> */}

      <Switch>
        <Route path="/test/result">
          <Result />
        </Route>
        <Route path="/test/:id?">
          <Test />
        </Route>
        <Route path="/calculator/result">
          <CO2Calculator />
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
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
