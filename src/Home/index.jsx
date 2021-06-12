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
            Cestování je skvělé, rozšiřuje naše obzory a pomáhá objevovat nové
            uhly pohledu. Temnou stránkou ale může být negativní vliv na životní
            prostředí. A ne každý cestovatel je DOBROdruh. Někteří jsou spíš
            ZLOdruhové. ZLOdruhové hážou na zem plastové láhve, ignorují zákazy
            vstupu v chráněných oblastech, a tak dále. Jak jsi na tom ty? Jsi
            vzorný DOBROdruh?
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
            Turismus je odpovědný za přibližně 8% celosvětových uhlíkových
            emisí. Od letecké přepravy a plavby lodí až po suvenýry a ubytování
            - to všechno přispívá k uhlíkové stopě cestovního ruchu.Ještě jste
            neslyšeli slovní spojení uhlíková stopa (carbon footprint)?Jde o
            ukazatel, který udává množství emisí CO2 vyprodukovaných během
            jednotlivých lidských aktivit. V rámci turismu má největší podíl na
            emisích právě transport. Ten je odpovědný za 49% globální uhlíkové
            stopy turizmu. Chceš vědět, jakou stopu na naší planetě zanechá
            tvoje příští cesta? Spočítej si to pomocí naší kalkulačky volba
            dopravního prostředku také definuje množství vyprodukovaného CO2.
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
            <h3>
              <a href="https://www.cmelak.cz/">Čmelák </a>
            </h3>
            <p>
              Organizace, která již 25 let přetváří konkrétní místa v krajině
              tak, aby na nich dostala prostor příroda. Ne zisk ani soukromé
              zájmy, ale příroda.
            </p>
          </article>
          <article className="project2">
            <h3>
              <a href="https://www.trashhero.cz/">Trash Hero </a>
            </h3>
            <p>
              Neziskovka a parta dobrovilníků, která bere ekologii s úsměvem a
              do vlastních rukou. Světové hnutí Trash Hero uklízí celkem v 15
              zemích.
            </p>
          </article>
          <article className="project3">
            <h3>
              <a href="http://keepitclean.cz/">Keep it Clean</a>
            </h3>
            <p>
              Parta nadšenců, kteří sbírají odpadky, kudy chodí. Přitom stíhají
              dělat hezké fotky a vymýšlet různé zlepšováky.
            </p>
          </article>
        </div>
      </section>
      <img className="leaf" src="/assets/img/leaf.svg" alt="leaf" />
    </>
  );
};

export default Home;
