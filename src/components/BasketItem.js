import { useContext } from "react";
import { ShopContext } from "../context";

export default function BasketItem(props) {
  const { id, name, price, quantity, incrementQuantity, decrementQuantity } =
    props;

  const { example } = useContext(ShopContext);
  console.log(example);

  return (
    <li className="collection-item">
      {name} x {quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <a
          href="##"
          className="waves-effect btnq waves-light btn"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">exposure_plus_1</i> add
        </a>
        <a
          href="##"
          className="waves-effect waves-light btnq btn"
          onClick={() => decrementQuantity(id)}
        >
          <i className="material-icons left">exposure_minus_1</i> remove
        </a>
        <a href="##" className="waves-effect btnq waves-light btn">
          <i
            className="material-icons basket-delete"
            onClick={() => props.removeFromBasket(id)}
          >
            delete
          </i>
        </a>
      </span>
    </li>
  );
}
