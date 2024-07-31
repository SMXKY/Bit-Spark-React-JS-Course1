const propTypes = require("prop-types");

export function Laptop(props) {
  console.log(props.reviews);
  return (
    <div>
      <label>Name: </label>
      <span>{props.name}</span>
      <br />
      <label>Price: </label>
      <span>{props.price}</span>
      <br />
      <label>Availabe: </label>
      <span>{props.available ? "Yes" : "No"}</span>
      <br />
      <label>Recomended?: </label>
      <span>{props.recomend()}</span>
      <br />
    </div>
  );
}

Laptop.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  available: propTypes.bool.isRequired,
  recomend: propTypes.func.isRequired,
  reviews: propTypes.arrayOf({
    userName: propTypes.string.isRequired,
    review: propTypes.string.isRequired,
  }),
};
