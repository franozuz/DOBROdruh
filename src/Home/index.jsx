import React from 'react';

const Home = () => {
  return (
    <>
      <section className="test">
        <img
          className="illustration"
          src="/assets/img/Illus_MEDIUM.png"
          alt="illustration woman and man trawellers"
        />
        <h1>Jsi pravý DOBROdruh?</h1>
        <p>
          Cestování je skvělé, rozširuje naše obzory a pomáhá nám objevovat nové
          ůhly pohledu. Cestování může mít ale i temné stránky, a to negativní
          vliv na životní prostředí. Toitiž, ne každý cestovatel je DOBROdruh.
          Někteří jsou spíš ZLOdruhové. ZLOdruhové hážou na zem plastové láhve,
          ignorují zákazy vstupu v chráněných oblatech, a tak dále. Jak na tom
          jseš ty? Jsi vzorný DOBROdruh?
        </p>
        <h3>Otestuj se v našem testu a zjisti, co ještě můžeš zlepšit.</h3>
        <button>Spustit test</button>
      </section>
      <section className="calculator">
        <h2>Zjisti a vykompenzuj uhlíkovou stopu své příští cesty</h2>
        <p>
          Turizmus je odpovědný za přibližně 8% celosvětových uhlíkových emisí.
          Zadej místo, odkud cestuješ, cílovou destinaci a způsob dopravy.
        </p>
        <form action="">
          <label htmlFor="">
            <input type="Odkud" placeholder="Odkud" />
            <input type="Kam" placeholder="Kam" />
            <input type="Typ dopravy" placeholder="Typ dopravy" />
          </label>
        </form>
        <button>Spočítat</button>
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
