import { useState } from "react";
import "./App.scss";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [pages, setPages] = useState([
    "Sobre",
    "Skills",
    "Projetos",
    "Contato",
  ]);
  return (
    <div>
      <Navbar pages={pages} />
      <Body pages={pages} />
    </div>
  );
}

export default App;
