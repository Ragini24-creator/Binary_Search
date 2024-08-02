import Node from "./node";
import "./nodeContainer.css";
import { useEffect, useState } from "react";
export default function NodeContainer(props) {
  //   const [isreset, isbinsearch, isalgorithmExplain] = props;
  const [arr, setArr] = useState([]);
  // const [stack, setStack] = useState([]);
  // const [searchClicked, setSearchClicked] = useState(props.isBinSearch);

  // console.log(props.isBinSearch);
  console.log(props.updatedArray);

  // console.log(BinarySearch([2, 5, 8, 23, 45, 67, 76, 89, 90], 5));
  // console.log(temp);
  // console.log(stack);

  useEffect(() => {
    setArr(props.updatedArray);
  }, [props.updatedArray]);

  // useEffect(() => {
  //   console.log("enters");
  //   BinarySearch(arr, arr[3]);
  //   setStack(temp);
  //   console.log(temp);
  //   // if (value) {
  //   //   console.log("found");
  //   // } else if (!value) {
  //   //   console.log("not found");
  //   // }

  //   console.log(stack);

  //   // setSearchClicked(false);
  // }, [props.isBinSearch]);

  return (
    <div className="node_container">
      {arr.map((ele, i) => {
        return <Node key={i} value={ele} />;
      })}
    </div>
  );
}

// if (r === true) {
//   updateArray();
//   setR(false);
//   console.log(array);
// }

// if (bs === true) {
//   updateArray();
//   setBs(false);
//   console.log(array);
// }

// if (ea === true) {
//   updateArray();
//   setEa(false);
//   console.log(array);
// }
// useEffect(() => {
//   updateArray();
//   console.log(array);
// }, []);
// export {arr}
