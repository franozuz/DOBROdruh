import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Tips = () => {
  return (
    <section className="tips__section">
      <h1>Tipy na udržitelné cestování</h1>
      <div className="tips__list">
        <div className="tips__article">
          <h2>PLÁNOVÁNÍ CESTY</h2>
          <p>
            {' '}
            Je jasné, že když se potřebujete dostat rychle do Kanady, musíte
            letět. Když ale cestujete po Evropě, zkuste volit ekologičtější
            způsob dopravy - vlaky, sdílená auta, kolo. Bude to sice trvat déle,
            ale při cestování platí, že cesta je cíl. Pokud opravdu musíte
            letět, zvolte raději let bez přestupu. Je to právě start a přistání,
            které produkují nejvíc CO2. <br />
            <br />
            Svou uhlíkovou stopu však můžete vykompenzovat. Některé aerolinky
            již nabízí možnost přikoupit kompenzaci přímo s letenkou nebo můžete
            využít takzvané offsetové organizace. Tyto společnosti pak vaše
            peníze investují do projektů zaměřených třeba na obnovitelné zdroje
            energie, výsadbu lesů a jiné prospěšné projekty. Například, při
            zpátečním letu Praha – New York připadá na osobu kolem 1,7 tuny CO2.
            Vykompenzování této uhlíkové stopy stojí kolem 400 Kč. Seznam
            organizací, které můžete podpořit, najdete{' '}
            <Link to="/Projects">tady.</Link>
            <br />
            <br />
            Pamatujete na časy, kdy jste si před cestou vytiskli itinerář, mapu
            i tipy na restaurace? Někteří to tak dělají dodnes. Nahrajte si vše
            do mobilu. Letenku, jízdenky, pojištění i mapy tak můžete mít stále
            po ruce.
          </p>
        </div>
        <img src="/assets/img/planet.svg" alt="planet" />
        <img src="/assets/img/baggage.svg" alt="suitcase" />
        <div className="tips__article">
          <h2>BALENÍ KUFRU</h2>
          <p>
            Cestujte na lehko. Není to moc překvapivé, ale čím víc letadlo váží,
            tím víc emisí vyprodukuje. Takže berte jen příruční zavazadlo a
            poděkuje vám nejen naše planeta, ale i vaše peněženka. <br />
            <br />
            Přibalte si s sebou i jednu plátěnou tašku. Přijde vám vhod při
            nákupech, na trhu nebo když půjdete na pláž. Na nákup potřebných
            věcí na cestování využijte e-shop{' '}
            <a href="https://www.zerowejst.cz/">Zero Wejst</a>. Do virtuálního
            nákupního košíku si rovnou můžete přidat extra příspěvek pro
            vybranou českou neziskovku.
            <br />
            <br />
            Kartáček na zuby by určitě nikdo sdílet nechtěl, ale půjčování
            repelentu, krému, zubní pasty(mezi rodinou nebo blízcími cestovali)
            na škodu není. Ušetříte tím místo i dále nepoužitelné obaly.
          </p>
        </div>

        <div className="tips__article">
          <h2>UBYTOVÁNÍ</h2>
          <p>
            Ubytování vybírejte podle toho, jak přistupuje k přírodním zdrojům.
            Dnes už existuje spousta hotelů, co recykluje a šetří vodu, nabízí
            jídla z lokálních surovin a podporuje místní rozvoj. Ve všeobecnosti
            platí, čím levnější, tím i víc eko. Nejšetrnější bude noc ve stanu
            (pokud za sebou nenecháte kupu odpadků), pak hostel a luxusní hotely
            až nakonec. Naštěstí už i mezi nimi najdeme takové, co se snaží o
            udržitelný provoz.
            <br />
            <br />
            Hotely ideálně hledejte takové, které mají nějaký z certifikátů o
            udržitelnosti. Může se jednat například o certifikáty{' '}
            <a href="https://earthcheck.org/">EarthCheck</a>,{' '}
            <a href="https://greenglobe.com/">Green Globe</a>,{' '}
            <a href="https://www.rainforest-alliance.org/">
              Rainforest Alliance
            </a>{' '}
            nebo{' '}
            <a href="https://www.green-tourism.com/pages/home">Green Tourism</a>
            . Tyto certifikáty znamenají, že daný hotel se snaží dodržovat jisté
            ekologické standardy.
          </p>
        </div>
        <img src="/assets/img/woman.svg" alt="DOBROdruzka" />
        <img src="/assets/img/man.svg" alt="ZLOdruh" />
        <div className="tips__article">
          <h2>V HOTELOVÉM POKOJI</h2>
          <p>
            Je opravdu lákavé užívat si každý den vanu a nonstop puštěnou
            klimatizaci, když nemusíte platit účty za vodu ani elektřinu. Zkuste
            se v hotelu chovat jako doma. Zhasínat světla a vypínat klimatizaci,
            když odcházíte. Místo koupele se sprchujte, nebo se koupejte ve
            dvou. K napuštění vany je potřeba kolem 200 litrů vody, při
            sprchování vyšploucháte v průměru jen 40 litrů.
            <br />
            <br />
            Pokud vás tato téma zaujala a chcete udělat ještě více, můžete se
            vzdát uklízení pokoje a výměny ručníků každý den. Když dáte na dveře
            ceduli „Nerušit“, pokojská nespotřebuje elektřinu na vysávání,
            chemické prostředky na čištění a ani vodu na praní ručníků.
          </p>
        </div>

        <div className="tips__article">
          <h2>VLASTNÍ LÁHEV NA VODU</h2>
          <p>
            Na letišti nás během bezpečnostní kontroly vždy přinutí vyhodit
            všechny láhve s vodou a hned za kontrolou pak kupujeme další,
            protože nápoje v letadle stojí randál. Když si na letiště přinesete
            vlastní láhev, prázdnou ji přenesete přes kontrolu, na druhé straně
            si můžete načepovat v pítku a pak v letadle frajeřit s nejlevnější
            vodou na palubě.
            <br />
            <br />
            Ať cestujete kamkoliv, vlastní láhev oceníte. Můžete si ráno v
            hotelu nabrat vodu a vyrazit kamkoliv bez toho, abyste někde
            kupovali předraženou balenou vodu.
          </p>
        </div>
        <img src="/assets/img/leaf.svg" alt="leaf" />
        <div className="tips__article">
          <h2>NAKUPUJTE LOKÁLNĚ</h2>
          <p>
            Zkuste vždy kupovat lokální potraviny a výrobky. Nejen, že tím
            podpoříte danou oblast, ale i ušetříte velkou uhlíkovou stopu, která
            vzniká při dovozu výrobků ze zahraničí. Aplikace
            <a href="https://www.happycow.net/"> Happy Cow</a> pomůže především
            těm z vás, kdo jste se rozhodli stravovat rostlinně. Filtruje nejen
            restaurace, ale i obchody nebo třeba tržiště. Navíc obsahuje i
            hodnocení od ostatních uživatelů, takže se nemusíte bát, že byste se
            spálili. <br />
            <br />
            Cestujte jen s etickými tour společnostmi. Pokud během pobytu v
            zahraničí chcete vyrazit na výlet, volte některou místní cestovní
            společnost. Ideální je vybírat menší společnosti s menším dopadem na
            přírodu. Pokud je členem{' '}
            <a href="https://ecotourism.org/">
              International Ecotourism Society
            </a>
            , chová se zodpovědně a udržitelně.
          </p>
        </div>
        <div className="tips__article">
          <h2>DO POSLEDNÍ KAPKY</h2>
          <p>
            Tohle nám, Čechům, asi není třeba vysvětlovat dvakrát. Nepoužité
            zbytky šamponů, kondicionérů a jiných toaletních potřeb, které jsou
            hostům k dispozici na pokoji, se často vyhazují. Když už tu malou
            lahvičku jednou otevřete, tak si ji pak vezměte s sebou domů. Můžete
            ji využít celou, správně vytřídit nebo ji znovu použít, když budete
            potřebovat cestovní balení. Pozor, velké balení, které jsou
            zamýšleny pro víc hostů, neberte.
            <br />
            <br />A na závěr jeden tip na správnou recyklaci. Každá krajina má
            odlišný systém třídění a recyklace. Proto je dobré se o tom informovat před
            cestou. Vychytané tipy na správné třídění v Česku naleznete na{' '}
            <a href="https://www.samosebou.cz/">Samosebou.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tips;
