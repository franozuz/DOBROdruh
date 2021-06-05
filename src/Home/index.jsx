import React from 'react';
import './style.css';

const Home = () => {
  return (
    <>
      <section className="home-test">
        <img
          src="/assets/img/Illus_1.svg"
          alt="illustration woman and man trawellers"
        />
        <article>
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
          <button>Spustit test</button>
        </article>
      </section>
      <section className="calculator">
        <article className="article-calculator">
          <div className="text-calculator">
            <h2>Zjisti a vykompenzuj uhlíkovou stopu své příští cesty</h2>
            <p>
              Turizmus je odpovědný za přibližně 8% celosvětových uhlíkových
              emisí. Zadej místo, odkud cestuješ, cílovou destinaci a způsob
              dopravy.
            </p>
          </div>

          <div className="calculator-input">
            <input type="text" placeholder="Odkud" id="destination" />
            <div id="output1"></div>
            <input type="text" placeholder="Kam" id="destination" />
            <div id="output2"></div>
            <input type="text" placeholder="Druh dopravy" id="destination" />
          </div>
          <div id="output3"></div>
          <button>Spočítat</button>
        </article>
      </section>
      <section className="projects">
        <h2>Podpor vybraný projekt a zneutralizuj svou uhlíkovou stopu!</h2>
        <article>Zasaď strom</article>
        <article>Zasaď strom</article>
        <article>Zasaď strom</article>
      </section>
    </>
  );
};

export default Home;
