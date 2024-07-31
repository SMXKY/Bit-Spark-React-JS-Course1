import propTypes from "prop-types";
//Displaying inline styling in react
export function Square(props) {
  return (
    <div
      style={{
        width: `${props.width}rem`,
        height: `${props.height}rem`,
        backgroundColor: `${props.color}`,
        marginBottom: `${props.marginBottom}rem`,
      }}
    ></div>
  );
}

Square.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  color: propTypes.string.isRequired,
  marginBottom: propTypes.number.isRequired,
};

//Talk on default prop values if possible

Square.defaultProps = {
  marginBottom: 3,
};
