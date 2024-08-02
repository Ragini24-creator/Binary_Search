import Navigation from "./UI/navigation";
import NodeContainer from "./UI/nodeContainer";

import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [reset, setReset] = useState(false);
  // const [binSearch, setBinSearch] = useState(false);
  const [algorithmExplain, setAlgorithmExplain] = useState(false);
  const [found, setFound] = useState(false);
  const [array, setarray] = useState([]);
  const [resultArr, setResultArr] = useState([]);
  const [i, setI] = useState(null);
  const [condi, setCondi] = useState(null);

  // generating new array
  let temp = [];
  function updateArray() {
    while (temp.length <= 39) {
      let r = Math.round(Math.random() * 60 + 1);
      if (temp.indexOf(r) === -1) {
        temp.push(r);
      } else {
        continue;
      }
    }

    console.log(temp.length);
    setarray(temp);

    document.querySelector(".node_container").classList.remove("hidden");
  }

  // node container code for testing

  // function color_reset(arr) {
  //   console.log("triggered");

  // });
  // arr.forEach((element, i, path) => {
  //   console.log(document.querySelector(`.node[uid = "${element}"]`));
  //   document.querySelector(
  //     `.node[uid = "${element}"]`
  //   ).style.backgroundColor = "none";
  //   document.querySelector(`.node[uid = "${element}"]`).style.border =
  //     "none ";
  // });
  // }

  const temp2 = [];
  const temp3 = [];
  let index, condition, time;

  function BinarySearch(array, search_ele) {
    let left = 0;
    let right = array.length;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      let mid_ele = array[mid];
      console.log(mid_ele);
      temp2.push(mid_ele);
      if (mid_ele === search_ele) {
        temp2.push(mid_ele);
        return [true, mid];
      } else if (search_ele < mid_ele) {
        right = mid - 1;
      } else if (search_ele > mid_ele) {
        left = mid + 1;
      }
    }
    // setSearchClicked(false);
    return [false];
  }

  function LinearSearch(array, search_ele) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === search_ele) {
        temp3.push(array[i]);
        return [true, i];
      }
      temp3.push(array[i]);
    }
    return false;
  }

  function didReset(val) {
    // setReset(val);
    setReset(val);
    setI("");
    setCondi("");
    document.querySelector(".analysis_div").classList.add("hidden");
    // setBinSearch(false);
    window.location.reload();
    // color_reset(resultArr);
    // setTimeout(() => {
    //   console.log("timeout");
    // }, 1000);
    // updateArray();
  }
  function update() {
    updateArray();
  }

  function didSearch(val) {
    // setBinSearch(val[0]);
    let output;
    if (val[1] === "linear") {
      output = LinearSearch(array, array[19]);
      if (output.length === 1) {
        setFound(false);
      } else {
        index = output[1];
        if (index + 1 === 1) {
          condition = "Best Case O(1)";
        } else if (index + 1 <= Math.round(array.length / 2)) {
          condition = "Average Case <= O(n/2)";
        } else {
          condition = "Worst Case O(n)";
        }

        setFound(true);
        setI(index);
        setCondi(condition);

        // console.log(temp2);
      }
      setResultArr(temp3);
    } else if (val[1] === "binary") {
      output = BinarySearch(array, array[25]);
      if (output.length === 1) {
        setFound(false);
      } else if (output.length === 2) {
        index = output[1];
        if (index + 1 === Math.round(array.length / 2)) {
          condition = "Best Case O(1)";
        } else if (index + 1 === 1 || index + 1 === array.length) {
          condition = "Worst Case O(log n) ";
        } else {
          condition = "Average Case < O(log n)";
        }
        setFound(true);
        setI(index);
        setCondi(condition);
        // console.log(temp2);
      }
      setResultArr(temp2);
    }
    document.querySelector(".analysis_div").classList.remove("hidden");
    // console.log(temp2);
    // setResultArr(temp2);
    // console.log(resultArr);
  }

  function didExplainAlgorithm(val) {
    setAlgorithmExplain(val);
  }

  useEffect(() => {
    let val;
    if (found === true) {
      val = resultArr.pop();
    }
    resultArr.forEach((element, i, path) => {
      setTimeout(() => {
        console.log(document.querySelector(`.node[uid = "${element}"]`));
        // setTimeout(() => {
        //   document.querySelector(
        //     `.node[uid = "${element}"]`
        //   ).style.backgroundColor = "#B0087F";
        // }, 500);

        document.querySelector(
          `.node[uid = "${element}"]`
        ).style.backgroundColor = "#f06595";
        document.querySelector(`.node[uid = "${element}"]`).style.border =
          "1px solid #9c36b5 ";
      }, 200 * i);

      setTimeout(() => {
        if (found === true) {
          // let v = resultArr[resultArr.length - 1];
          document.querySelector(
            `.node[uid = "${val}"]`
          ).style.backgroundColor = "#B0087F";
        }
      }, 200 * resultArr.length);
    });
  }, [resultArr]);

  useEffect(() => {
    document.querySelectorAll(".node").forEach((element) => {
      element.style.backgroundColor = "blueviolet";
    });
    if (reset === true) {
      setReset(false);
    }
  }, [reset]);

  return (
    <React.Fragment>
      <div class="analysis_div hidden">
        <div>Element found at index : {i}</div>
        <div> Time Complexity Analysis : {condi}</div>
      </div>
      <div className="container ">
        <Navigation
          onReset={didReset}
          onSearch={didSearch}
          onUpdate={update}
          onExplainAlgorithm={didExplainAlgorithm}
        />
        <NodeContainer
          updatedArray={array.sort(function (a, b) {
            return a - b;
          })}
          state={true}
          isAlgorithmExplain={algorithmExplain}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
