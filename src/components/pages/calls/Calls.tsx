import "./calls.css";
import { FaPhone } from "react-icons/fa";
import Header from "../../header/Header";
const Calls = () => {
  const phoneSets = [
    {
      tof: <FaPhone />,
      paragraph: "Appeler",
    },
    {
      tof: <FaPhone />,
      paragraph: "Planifier",
    },
    ,
    {
      tof: <FaPhone />,
      paragraph: "Pavé numérique",
    },
    {
      tof: <FaPhone />,
      paragraph: "Favoris",
    },
    {
      tof: <FaPhone />,
      paragraph: "Others",
    },
  ];
  return (
    <>
      {/* <Header logo="Calls" /> */}
      <div className="box">
        <div>
          <input type="search" id="searchBar" placeholder=" Search a call.🔍" />
        </div>
        <br />
        {phoneSets.map((phoneSet) => {
          return (
            <div className="bigBoule">
              <small className="bouleOption">
                {phoneSet.tof}
                <p>{phoneSet.paragraph}</p>
              </small>
            </div>
          );
        })}
        <br />
        <br />
        <div className="historique">
          <h2>Recent Call</h2>
        </div>
      </div>
    </>
  );
};

export default Calls;
