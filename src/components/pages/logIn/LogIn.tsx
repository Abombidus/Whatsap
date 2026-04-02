import "./login.css";
import WaLogoRM from "../../assets/images/WaLogoRM.png";
import TwoWaPhonesRM from "../../assets/images/TwoWaPhonesRM.png";
import PhonesRM from "../../assets/images/PhoneRM.png";
const LogIn = () => {
  return (
    <>
      <div className="container login">
        <div className="one">
          <div className="levelOne">
            <img src={WaLogoRM} alt="Whatsapp Logo" className="walogorm" />
            <h1 className="loginText">Whatsapp</h1>
          </div>

          <div className="levelTwo">
            <h4>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates odit assumenda voluptatem alias doloribus sunt natus
              aliquam. Ducimus voluptatibus numquam quo itaque ut saepe ipsam
              sunt et? Saepe eveniet, fugit voluptatibus nulla repellendus sint
              earum a autem ab, temporibus iste consequatur dolor enim ex
              minima!
            </h4>

            <div className="btnConnexion">
              <button id="seConnecter">Se connecter</button>
              <button id="creeCompte">Cree un compte</button>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="sectionOne">
            <img src={PhonesRM} alt="" className="phone" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
