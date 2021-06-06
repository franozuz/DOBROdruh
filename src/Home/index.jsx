import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Calculator from '../CO2Calculator/Calculator';

const Home = () => {
  return (
    <>
      <section className="home-test">
        <img
          src="/assets/img/Illustration.svg"
          alt="illustration woman and man trawellers"
        />
        <article className="article-home-test">
          <h1>Jsi pravý DOBROdruh?</h1>
          <p>
            Cestování je skvělé, rozširuje naše obzory a pomáhá nám objevovat
            nové ůhly pohledu. Cestování může mít ale i temné stránky, a to
            negativní vliv na životní prostředí. Toitiž, ne každý cestovatel je
            DOBROdruh. Někteří jsou spíš ZLOdruhové. ZLOdruhové hážou na zem
            plastové láhve, ignorují zákazy vstupu v chráněných oblatech, a tak
            dále. Jak na tom jseš ty? Jsi vzorný DOBROdruh?
          </p>
          <h3>Otestuj se v našem testu a zjisti, co ještě můžeš zlepšit.</h3>
          <Link to="/test/1">
            <button className="btn-test">Spusti test</button>
          </Link>
        </article>
      </section>
      <section className="calculator">
        <article className="article-calculator">
          <h2>
            Zjisti a vykompenzuj uhlíkovou stopu
            <br /> své příští cesty
          </h2>
          <p>
            Turizmus je odpovědný za přibližně 8% celosvětových uhlíkových
            emisí.
            <br />
            Zadej místo, odkud cestuješ, cílovou destinaci a způsob dopravy.
          </p>
        </article>
        <div className="calculator-input">
          <Calculator />
        </div>
      </section>
      <section className="home-projects">
        <h2>Podpoř vybraný projekt a zneutralizuj svou uhlíkovou stopu!</h2>
        <div className="article-projects">
          <article className="project1">
            <h3>Zasaď strom </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              ducimus repellat est delectus distinctio quisquam maxime
            </p>
          </article>
          <article className="project2">
            <h3>Zasaď strom </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              ducimus repellat est delectus distinctio quisquam maxime
            </p>
          </article>
          <article className="project3">
            <h3>Zasaď strom </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              ducimus repellat est delectus distinctio quisquam maxime
            </p>
          </article>
        </div>
      </section>
      <img className="leaf" src="/assets/img/leaf.svg" alt="leaf" />
    </>
  );
};

export default Home;
