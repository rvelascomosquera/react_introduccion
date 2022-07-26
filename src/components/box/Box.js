
function Box(props) {
  return (
    <div className="box" onClick={() => {
      props.clicked(props.count + 1);
    }}>
      <p>{props.name}</p>
      <p>count: {props.count}</p>
    </div>
  );
}

export default Box;
