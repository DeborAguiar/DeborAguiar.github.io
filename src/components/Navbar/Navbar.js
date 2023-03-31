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
          <div class="navbar-nav nav">
            <a class="nav-link active" data-toggle="tab" href="#tab1">
              <span>Sobre</span>
            </a>
            <a class="nav-link" data-toggle="tab" href="#tab2">
              <span>Projetos</span>
            </a>
            <a class="nav-link" data-toggle="tab" href="#tab3">
              <span>Experiências Anteriores</span>
            </a>
            <a class="nav-link" data-toggle="tab" href="#tab4">
              <span>Formação</span>
            </a>
            <a class="nav-link" data-toggle="tab" href="#tab5">
              <span>Contato</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
