import { useState } from "react";
import "./Navigation.css";

export default function Navigation(props) {
  const [clicked, setclicked] = useState([]);
  const [res, setres] = useState(false);
  function reset_handler() {
    // const list = document.querySelectorAll(`.node`);
    // console.log(list);
    // list.forEach((ele) => {
    //   console.log(ele.style.baclgroundColor);
    //   ele.style.baclgroundColor = "#blue";
    // });
    setres(true);
    props.onReset(res);
  }
  function binarySearch_handler() {
    setclicked([true, "binary"]);
    props.onSearch(clicked);
  }

  function linearSearch_handler() {
    setclicked([true, "linear"]);
    props.onSearch(clicked);
  }
  function update_handler() {
    props.onUpdate(true);
  }

  return (
    <div className="nav">
      <h1 className="site_logo">Binary Search</h1>
      <div className="nav_link">
        <button className="btn btn-reset" onClick={reset_handler}>
          Reset Content
        </button>
        <button className="btn btn-update" onClick={update_handler}>
          Update Array
        </button>

        <button className="btn btn-search" onClick={binarySearch_handler}>
          Binary Search
        </button>

        <button
          className="btn btn-algorithm_explain"
          onClick={linearSearch_handler}
        >
          Linear Search
        </button>

        {/* <button
          className="btn btn-algorithm_explain"
          onClick={algorithm_explain_handler}
        >
          Algorithm
        </button> */}
      </div>
    </div>
  );
}
