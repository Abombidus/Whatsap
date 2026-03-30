import { ImNewspaper } from "react-icons/im";
import "./navBar.css";
import { FaPhone } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState("#Chats");
  return (
    <>
      <nav>
        <a
          href="#Actus"
          onClick={() => {
            setActive("#Actus");
          }}
          className={active === "#Actus" ? "active" : ""}
        >
          <ImNewspaper />
          Actus
        </a>
        <a
          href="#Calls"
          onClick={() => {
            setActive("#Calls");
          }}
          className={active === "#Calls" ? "active" : ""}
        >
          <FaPhone />
          Calls
        </a>
        <a
          href="#Store"
          onClick={() => {
            setActive("#Store");
          }}
          className={active === "#Store" ? "active" : ""}
        >
          <FaShopify />
          Store
        </a>
        <a
          href="#Chats"
          onClick={() => {
            setActive("#Chats");
          }}
          className={active === "#Chats" ? "active" : ""}
        >
          <IoMdChatbubbles />
          Chats
        </a>
        <a
          href="#Settings"
          onClick={() => {
            setActive("#Settings");
          }}
          className={active === "#Settings" ? "active" : ""}
        >
          <IoSettings />
          Settings
        </a>
      </nav>
    </>
  );
};

export default NavBar;
