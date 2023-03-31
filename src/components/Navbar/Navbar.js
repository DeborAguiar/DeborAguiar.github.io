import { useState } from "react";
import "./Navbar.css";
import NavLink from "./components/NavLink/NavLink";

function Navbar() {
  const [itens, setItens] = useState([
    "Sobre",
    "Projetos",
    "Experiências Anteriores",
    "Formação",
    "Contato",
  ]);

  return (
    <nav class="navbar navbar-dark navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <h2 class="navbar-brand">Débora de Aguiar Boni</h2>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav nav">
            {itens.map((item, idx) => (
              <NavLink item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
