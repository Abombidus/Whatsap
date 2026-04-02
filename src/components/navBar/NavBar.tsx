import { ImNewspaper } from "react-icons/im";
import "./navBar.css";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState("#3");
  return (
    <>
      <nav>
        <Link to="actus">
          <a
            href="#0"
            onClick={() => {
              setActive("#0");
            }}
            className={active === "#0" ? "active" : ""}
          >
            <ImNewspaper />
            Actus
          </a>
        </Link>

        <Link to="calls">
          <a
            href="#1"
            onClick={() => {
              setActive("#1");
            }}
            className={active === "#1" ? "active" : ""}
          >
            <FaPhone />
            Calls
          </a>
        </Link>

        <Link to="store">
          <a
            href="#2"
            onClick={() => {
              setActive("#2");
            }}
            className={active === "#2" ? "active" : ""}
          >
            <FaShopify />
            Store
          </a>
        </Link>

        <Link to="">
          <a
            href="#3"
            onClick={() => {
              setActive("#3");
            }}
            className={active === "#3" ? "active" : ""}
          >
            <IoMdChatbubbles />
            Chats
          </a>
        </Link>

        <Link to="setting">
          <a
            href="#4"
            onClick={() => {
              setActive("#4");
            }}
            className={active === "#4" ? "active" : ""}
          >
            <IoSettings />
            Settings
          </a>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
