import "./node.css";

export default function Node(props) {
  
  return (
    <div
      className="node"
      uid={props.value}
      style={{ height: `${props.value * 7 + 15}px` }}
    >
      {props.value}
    </div>
  );
}
{
  /* <h1 style={}></h1> */
}
