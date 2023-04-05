
function NavLink(props) {
  return (
    <span
      className={`nav-link mx-3 pt-3 ${props.idx === 0 ? 'active' : ''}`}
      data-toggle="tab"
      data-bs-target="#carouselIndicators"
      data-bs-slide-to={`${props.idx}`}
    >
      <span>{props.item}</span>
    </span>
  );
}

export default NavLink;
