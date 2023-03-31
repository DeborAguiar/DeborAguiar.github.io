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
        <div class="collapse navbar-collapse justify-content-end">
          <div class="navbar-nav nav">
            <a
              className="nav-link active"
              data-toggle="tab"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
            >
              <span>Sobre</span>
            </a>
            <a
              class="nav-link"
              data-toggle="tab"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
            >
              <span>Projetos</span>
            </a>
            <a
              class="nav-link"
              data-toggle="tab"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
            >
              <span>Experiências Anteriores</span>
            </a>
            <a
              class="nav-link"
              data-toggle="tab"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
            >
              <span>Formação</span>
            </a>
            <a
              class="nav-link"
              data-toggle="tab"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
            >
              <span>Contato</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
