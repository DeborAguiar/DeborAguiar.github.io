import "./NavLink.css";

function NavLink(props) {
  return (
    <a
      className={`nav-link ${props.idx==0 ? 'active' : ''}`}
      data-toggle="tab"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={`${props.idx}`}
    >
      <span>{props.item}</span>
    </a>
  );
}

export default NavLink;
