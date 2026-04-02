import "./chats.css";
import ProfilePicture from "../../../assets/profilePicture.jpg";
import Phone from "../../../assets/Phone.jpg";
import Header from "../../header/Header";
import Me from "../../../assets/Me.jpg";
import Accueil from "../../../assets/Accueil.jpg";
import Monter from "../../../assets/Monter.JPG";
import Windows11 from "../../../assets/Windows11.jpg";
import ChatContent from "./ChatContent";
import { useNavigate } from "react-router-dom";

const Chats = () => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const schema = `${hour}:${minute}`;

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const navigate = useNavigate();

  type User = {
    id: number;
    nom: string;
    picture: string;
    time: string;
    message: string;
  };

  const users: User[] = [
    {
      id: 1,
      nom: "Abo Mbidus",
      picture: ProfilePicture,
      time: time,
      message: "Hello, how are you?",
    },
    ,
    {
      id: 2,
      nom: "Jean Paul",
      picture: Me,
      time: time,
      message: `Hey, are you coming 
      are you coming to the party tonightare you coming to the party tonightare you coming to the party tonightare you coming to the party tonightare you coming to the party tonightare you coming to the party tonightare you coming to the party tonightare you coming to the party tonightvare you coming to the party tonightvare you coming to the party tonight
      to the party tonight?
      `,
    },
    {
      id: 3,
      nom: "Sandy Squerelle",
      picture: Monter,
      time: time,
      message: "Hey, are you coming to the party tonight?",
    },
    {
      id: 4,
      nom: "Anie Lisette",
      picture: Monter,
      time: time,
      message: "Hi, I just wanted to check in and see how you're doing.",
    },
    {
      id: 5,
      nom: "Alexis Mbianda",
      picture: Accueil,
      time: time,
      message:
        "Hey, do you want to grab lunch tomorrow? JavaScript is life!    ",
    },
    {
      id: 6,
      nom: "Annie Mbianda",
      picture: Windows11,
      time: time,
      message:
        "Hi, I just wanted to check in and see how you're doing. But i known use TypeScript",
    },
  ];

  return (
    <>
      {/* <Header logo="Chats" /> */}

      <div className="box">
        <label>
          <input
            type="search"
            placeholder="Search for  a chat...🔍"
            id="searchBar"
          />
        </label>
        <fieldset>
          {users.map((user) => (
            <article key={user.id}>
              <button className="chatButton">
                <img
                  className="ProfilePic"
                  src={user.picture}
                  alt="Profile Picture"
                  id="pp"
                />
                <p className="profileName">{user.nom}</p>

                <fieldset className="messageContainer">
                  <p className="message">{user.message}</p>
                </fieldset>
                <p className="time">{user.time}</p>
              </button>
              <span>20</span>
            </article>
          ))}
        </fieldset>
      </div>
    </>
  );
};

export default Chats;
