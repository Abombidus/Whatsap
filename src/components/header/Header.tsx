import { BsThreeDots } from "react-icons/bs";
import "./header.css";
import { FaCamera, FaPlus } from "react-icons/fa";

const Header = (props: { logo: string }) => {
  return (
    <>
      <header className="container">
        <div className="headerStatus">
          <h1 className="logo">{props.logo}</h1>

          <div className="headerIcons">
            <a href="#">
              <BsThreeDots />
            </a>
            <a href="#">
              <FaCamera />
            </a>
            <a href="">
              <FaPlus />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
