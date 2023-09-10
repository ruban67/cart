import "./Card.css";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Card({ plan, price, details }) {
  let i = 0;
  return (
    <div className="card">
      <div className="upper-half">
        <div className="plan">{plan}</div>
        <div>
          <span className="price">${price}</span>/month
        </div>
        <div className="line">
          <hr />
        </div>
      </div>
      <div className="lower-half">
        <ul className="details">
          {details.map((detail) => {
            i++;
            if (detail.available) {
              return (
                <li key={i}>
                  <span className="icon-padding">
                    <FaCheck />
                  </span>
                  {detail.feature}
                </li>
              );
            } else {
              return (
                <li key={i} style={{opacity: 0.3}}>
                  <span className="icon-padding">
                    <ImCross />
                  </span>
                  {detail.feature}
                </li>
              );
            }
          })}
        </ul>
      </div>
      <button className="btn" type="submit">
        ADD TO CART
      </button>
    </div>
  );
}

export default Card;