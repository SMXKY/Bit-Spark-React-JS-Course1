const propTypes = require("prop-types");

export function Book(props) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <label>Name</label>
      <span>{props.info.name}</span> <br />
      <label>Author</label>
      <span>{props.info.author}</span> <br />
      <label>ISBN</label>
      <span>{props.info.isbn}</span> <br />
      <label>Realease date</label>
      <span>{props.info.releaseDate}</span> <br />
    </div>
  );
}

Book.propTypes = {
  info: propTypes.objectOf({
    name: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    isbn: propTypes.string.isRequired,
    releaseDate: propTypes.string.isRequired,
  }),
};
