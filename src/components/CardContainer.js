import "./CardContainer.css";
import data from "../data";
import Card from "./Card";

function CardContainer() {
  console.log(data);
  return (
    <div className="card-wrapper">
      {data.map((card) => {
        return <Card key={card.id} {...card}/>
      })}
    </div>
  );
}

export default CardContainer;