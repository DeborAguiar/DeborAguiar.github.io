import "./App.scss";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import pages from "./Pages";

function App() {
  return (
    <div>
      <Navbar pages={pages} />
      <Body pages={pages} />
    </div>
  );
}

export default App;
