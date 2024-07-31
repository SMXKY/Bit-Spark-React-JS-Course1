export function InternInfo(props) {
  return (
    <div>
      <label>Name: </label>
      <span>{props.name}</span> <br />
      <label>Stack: </label>
      <span>{props.stack.toUpperCase()}</span> <br />
      <label>Speciality: </label>
      <span>{props.speciality}</span> <br />
      <label>dob: </label>
      <span>{`${new Date(props.dob)}`}</span> <br />
    </div>
  );
}
