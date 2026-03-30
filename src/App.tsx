import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Chats from "./components/chats/Chats";
const App = () => {
  return (
    <div>
      <Header logo="Discussion" />
      <Chats />
      <NavBar />
    </div>
  );
};

export default App;
