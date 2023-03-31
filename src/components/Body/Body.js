import "./Body.css";
import Card from "./components/Card/Card";

function Body(props) {
  return (
    <div className="container">
      <div id="carouselExampleIndicators" className="carousel slide ">
        <div className="carousel-inner">
          {props.pages.map((item, idx) => (
            <Card item={item} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
