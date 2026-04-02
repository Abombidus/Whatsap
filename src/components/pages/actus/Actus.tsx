import "./actus.css";
import { FaUserCircle } from "react-icons/fa";
import Header from "../../header/Header";
import Compte1 from "../../../assets/Compte1.PNG";

const Actus = () => {
  const status = [
    {
      image: <FaUserCircle />,
    },
    {
      image: <FaUserCircle />,
    },
    {
      image: <FaUserCircle />,
    },
    {
      image: <FaUserCircle />,
    },
    {
      image: <FaUserCircle />,
    },
    {
      image: <FaUserCircle />,
    },
    {
      image: <FaUserCircle />,
    },
    {
      image: <FaUserCircle />,
    },
    {
      image: <FaUserCircle />,
    },
    {
      image: <FaUserCircle />,
    },
    {
      image: <FaUserCircle />,
    },
  ];

  const chaines = [
    {
      image: Compte1,
      nomChaine: "Nom de la chaine",
      messageChaine: `loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dkngkddkldfmdflkdgfdlfdkkdflfdmlloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dlodkldùm;dgdlgdlgdldgld,gdmmdfkgdlmdmld;,njklmdfkjdfljgfdjdgljkdfj`,
    },
    {
      image: Compte1,
      nomChaine: "Nom de la chaine",
      messageChaine: `loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dkngkddkldfmdflkdgfdlfdkkdflfdloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dlomldkldùm;dgdlgdlgdldgld,gdmmdfkgdlmdmld;,njklmdfkjdfljgfdjdgljkdfj`,
    },
    {
      image: Compte1,
      nomChaine: "Nom de la chaine",
      messageChaine: `loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dkngkddkldfmdflkdgfdlfdkkdflfdmldkldùm;dgdlgdlgdldgld,gdmmdfkgdlmdmld;,njklmdfkjdfljgfdjdgljkdfj`,
    },
    {
      image: Compte1,
      nomChaine: "Nom de la chaine",
      messageChaine: `loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dkngkddkldfmdflkdgfdlfdkkdflfdmldkldùm;dgdlgdlgdldgld,gdmmdfkgdlmdmld;,njklmdfkjdfljgfdjdgljkdfj`,
    },
    {
      image: Compte1,
      nomChaine: "Nom de la chaine",
      messageChaine: `loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dkngkddkldfmdflkdgfdlfdkkdflfdmldkldùm;dgdlgdlgdldgld,gdmmdfkgdlmdmld;,njklmdfkjdfljgfdjdgljkdfj`,
    },
    {
      image: Compte1,
      nomChaine: "Nom de la chaine",
      messageChaine: `loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dkngkddkldfmdflkdgfdlfdkkdflfdmldkldùm;
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      loremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,dloremhbfsejksefksnkslsgd,fd*ùdf,mdsgl,d
      dgdlgdlgdldgld,gdmmdfkgdlmdmld;,njklmdfkjdfljgfdjdgljkdfj`,
    },
  ];
  return (
    <>
      {/* <Header logo="Actus" /> */}

      <div className="box">
        <div>
          <input
            type="search"
            id="searchBar"
            placeholder=" Search an actuality...🔍"
          />
        </div>
        <br />
        <h2>Status</h2>
        <div className="status">
          {status.map((statu: any) => {
            return <div className="singleStatus">{statu.image}</div>;
          })}
        </div>
        <br />
        {/* Chaine */}

        <h2 className="chaineTitre">Chaines</h2>
        <div className="chaineContainer">
          <div className="chaineContent">
            {chaines.map((chaine: any) => {
              return (
                <fieldset className="ligne">
                  <img src={Compte1} />

                  <div className="chaineText">
                    <h3>{chaine.nomChaine}</h3>
                    <p>{chaine.messageChaine}</p>
                  </div>
                </fieldset>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Actus;
