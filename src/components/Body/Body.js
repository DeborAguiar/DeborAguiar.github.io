import Card from "./components/Card/Card";

function Body(props) {
  return (
    <div className="container">
      <div id="carouselIndicators" className="carousel slide ">
        <div className="carousel-inner">
          {props.pages.map((item, idx) => (
            <Card key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
