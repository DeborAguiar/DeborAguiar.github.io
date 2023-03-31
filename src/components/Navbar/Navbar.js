import "./Navbar.css";
import NavLink from "./components/NavLink/NavLink";

function Navbar(props) {

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
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
            class="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav nav fs-4">
              {props.pages.map((item, idx) => (
                <NavLink item={item} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
