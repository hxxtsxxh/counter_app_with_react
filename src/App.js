import "./App.css";
import { React, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // increment
  const increment = () => {
    setCounter((count) => count + 1);
    if ((counter + 1) % 5 === 0) {
      document.getElementById("output").style.color = "lightgreen";
    } else {
      document.getElementById("output").style.color = "black";
    }
  };

  // decrement
  const decrement = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
    if ((counter - 1) % 5 === 0 && counter - 1 !== 0) {
      document.getElementById("output").style.color = "red";
    } else {
      document.getElementById("output").style.color = "black";
    }
  };

  // reset
  const reset = () => {
    setCounter(0);
  };

  return (
    <body>
      <div className="counter">
        <h1>My Counter App</h1>
        <span className="counter__output" id="output">
          {counter}
        </span>
        <div className="btn__container">
          <button className="control_btn" onClick={increment}>
            +
          </button>
          <button className="control_btn" onClick={decrement}>
            -
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </body>
  );
}

export default App;
