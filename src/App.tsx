import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
// import LogIn from "./pages/logIn/LogIn";
import Chats from "./components/pages/chats/Chats";
import Actus from "./components/pages/actus/Actus";
import Calls from "./components/pages/calls/Calls";
import Store from "./components/pages/store/Store";
import Setting from "./components/pages/setting/Setting";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header logo="ChatApp" />
      <Routes>
        <Route path="/" element={<Chats />} />
        <Route path="actus" element={<Actus />} />
        <Route path="calls" element={<Calls />} />
        <Route path="store" element={<Store />} />
        <Route path="setting" element={<Setting />} />
        <Route />
      </Routes>
      <NavBar />
    </>
  );
};

export default App;
