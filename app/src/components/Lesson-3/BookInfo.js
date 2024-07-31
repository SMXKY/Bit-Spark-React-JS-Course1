const propTypes = require("prop-types");

export function BookInfo(props) {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
}

BookInfo.propTypes = {
  name: propTypes.string.isRequired,
};
