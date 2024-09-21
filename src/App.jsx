import React, { useState } from "react";
import "./styles/styles.css";
// /
const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // function for input validation
  const validateNums = () => {
    // check if the inputs are empty
    if (num1 === "" && num2 === "") {
      setErrorMessage("Please enter both the number");
      setIsError(true);
      return false;
    }
    //check if num1 is empty but not num2
    else if (!num1 && num2) {
      setErrorMessage("Num1 cannot be empty");
      setIsError(true);
      return false;
    }
    //check if num2 is empty but not num1
    else if (num1 && !num2) {
      setErrorMessage("Num2 cannot be empty");
      setIsError(true);
      return false;
    }
    //cehck if the inputs are valid
    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setErrorMessage("Please enter valid numbers");
      setIsError(true);
      return false;
    }

    setErrorMessage("");
    setIsError(false);
    return true;
  };

  // function for addition
  const add = () => {
    validateNums() && setResult(parseFloat(num1) + parseFloat(num2));
  };
  //funciton for sutraction
  const subtract = () => {
    validateNums() && setResult(parseFloat(num1) - parseFloat(num2));
  };
  //function for multiplication
  const multiply = () => {
    validateNums() && setResult(parseFloat(num1) * parseFloat(num2));
  };

  // function for division
  const divide = () => {
    if (validateNums()) {
      if (parseFloat(num2) === 0) {
        setErrorMessage("Cannot divide by zero");
        setIsError(true);
        return;
      }
      setResult(parseFloat(num1) / parseFloat(num2));
    }
  };
  return (
    <div id="main">
      <div className="calculator">
        <div className="calc-heading">
          <h1>React Calculator</h1>
        </div>
        <div className="calc-inputs">
          <input
            placeholder="Num 1"
            value={num1}
            type="text"
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            placeholder="Num 2"
            value={num2}
            type="text"
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div className="operations">
          <button onClick={add}>+</button>
          <button onClick={subtract}>-</button>
          <button onClick={multiply}>*</button>
          <button onClick={divide}>/</button>
        </div>
        <div className="result">
          {isError && (
            <>
              <h4 style={{ color: "red" }}>Error..!</h4>
              <p>{errorMessage}</p>
            </>
          )}
          {result != null && !isError && (
            <>
              <h4 style={{ color: "green" }}>Success</h4>
              <p>Result: {result}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
