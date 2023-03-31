import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import form from "./img/blob-haikei.png"

function App() {
  return (
    <div>
      <Navbar prop="teste" />
      <img src={form} alt="Descrição da imagem" />
    </div>
  );
}

export default App;
