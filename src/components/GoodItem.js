export default function GoodItem(props) {
  const { id, name, description, price, full_background, addToBasket } = props;
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span
          className="card-title"
          style={{ color: "navy", fontWeight: "700" }}
        >
          {" "}
          {name}{" "}
        </span>
        <p
          style={{ fontFamily: "italic", fontWeight: "700", fontSize: "18px" }}
        >
          {" "}
          {description}{" "}
        </p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ id, name, price })}
        >
          Buy
        </button>
        <span
          className="right"
          style={{ fontSize: "1.8rem", fontWeight: "700" }}
        >
          {price}$
        </span>
      </div>
    </div>
  );
}
