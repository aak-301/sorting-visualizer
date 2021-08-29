import React, { Fragment, useEffect, useState } from "react";
import classes from "./SortingVisualizer.module.css";

const SortingVsualizer = () => {
  const [displayBarsState, setDisplayBarsState] = useState([]);
  const [getTwoVal, setGetTwoVal] = useState([]);
  let ArrayElements = [];
  const array_size = 300;

  const ArrayGeneratorHandler = () => {
    ArrayElements = [];
    for (let i = 0; i < array_size; i++) {
      ArrayElements.push(Math.trunc(Math.random() * 100) + 10);
    }
    setDisplayBarsState(ArrayElements);
  };

  const arrayBars = document.getElementsByClassName(classes.bars);
  const BubbleSortHandler = () => {
    let firstValue, secondValue;
    for (let i = 0; i < array_size - 1; i++) {
      for (let j = 0; j < array_size - i - 1; j++) {
        firstValue = displayBarsState[j];
        secondValue = displayBarsState[j + 1];
        console.log(firstValue, secondValue);
        if (firstValue > secondValue) {
          setTimeout(() => {
            let temp = arrayBars[j].style.height;
            arrayBars[j].style.backgroundColor = "white";
            arrayBars[j + 1].style.backgroundColor = "yellow";
            arrayBars[j].style.height = arrayBars[j + 1].style.height;
            arrayBars[j + 1].style.height = temp;
          }, 1);

          displayBarsState[j] = secondValue;
          displayBarsState[j + 1] = firstValue;
          setDisplayBarsState(displayBarsState);
        }
      }
    }
    // console.log(displayBarsState);
  };

  useEffect(() => {
    setTimeout(() => {
      const [findex, sindex] = getTwoVal;

      // console.log(arrayBars[findex].attributes);
      // if (arrayBars.length > 0) {
      //   arrayBars[findex].style.backgroundColor = "pink";
      //   arrayBars[sindex].style.backgroundColor = "yellow";
      // }
      // console.log(arrayBars);
    }, 1);
  });

  return (
    <Fragment>
      <button onClick={ArrayGeneratorHandler}>Generate Array</button>
      <button onClick={BubbleSortHandler}>Bubble Sort</button>
      <div
        className={classes.bars_space}
        style={{ paddingTop: `${displayBarsState.length > 0 ? "30px" : ""}` }}
      >
        {displayBarsState.map((e, id) => (
          <div
            key={id}
            className={classes.bars}
            style={{ height: `${e * 5}px`, backgroundColor: "red" }}
          ></div>
        ))}
      </div>
    </Fragment>
  );
};

export default SortingVsualizer;
