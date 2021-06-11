import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Calculator from '../CO2Calculator/Calculator';

const Home = () => {
  return (
    <>
      <section className="home__test">
        <img
          src="/assets/img/Illustration.svg"
          alt="illustration woman and man trawellers"
        />
        <article className="home__article--test">
          <h1>Jsi pravý DOBROdruh?</h1>
          <p>
            Cestování je skvělé, rozšiřuje naše obzory a pomáhá nám objevovat
            nové úhly pohledu. Cestování může mít ale i temné stránky, a to
            negativní vliv na životní prostředí. Totiž, ne každý cestovatel je
            DOBROdruh. Někteří jsou spíš ZLOdruhové. ZLOdruhové hážou na zem
            plastové láhve, ignorují zákazy vstupu v chráněných oblastech, a tak
            dále. Jak jsi na tom ty? Jsi vzorný DOBROdruh?
          </p>
          <h3>Otestuj se a zjisti, co ještě můžeš zlepšit.</h3>
          <Link to="/test/1">
            <button className="btn-test">Spusti test</button>
          </Link>
        </article>
      </section>
      <section className="home__calculator">
        <article className="article-calculator">
          <h2>
            Zjisti a vykompenzuj uhlíkovou stopu
            <br /> své příští cesty
          </h2>
          <p>
            Turizmus je odpovědný za přibližně 8% celosvětových uhlíkových
            emisí. Od letecké přepravy a plavby lodí až po suvenýry a ubytování
            - to všechno přispívá k uhlíkové stopě cestovního ruchu. Pro ty z
            vás, kdo ještě slovní spojení uhlíková stopa (carbon footprint)
            neslyšeli, jde o ukazatel, který udává množství emisí CO2
            vyprodukovaných během jednotlivých lidských aktivit. V rámci turizmu
            má největší podíl na emisích právě transport. Ten je odpovědný za
            49% globální uhlíkové stopy turizmu. Chceš vědět, jakou stopu na
            naší planetě zanechá tvoje příští cesta? Spočítej si to pomocí naší
            kalkulačky.
          </p>
        </article>
        <div className="calculator-input">
          <Calculator />
        </div>
      </section>
      <section className="home__projects">
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
              Neziskovka a parta dobrovolníků, která bere ekologii s úsměvem a
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
