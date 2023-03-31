import "./Navbar.css";

function Navbar() {
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
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Sobre
            </a>
            <a class="nav-link" href="#">
              Projetos
            </a>
            <a class="nav-link" href="#">
              Experiências Anteriores
            </a>
            <a class="nav-link" href="#">
              Formação
            </a>
            <a class="nav-link" href="#">
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
