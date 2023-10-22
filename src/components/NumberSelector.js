import React from "react";
import "./NumberSelector.css";

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {
  const arrayNumbers = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value)
    setError("")
  }

  return (
    <div className="gamePlayTopRight">
      <p className="ErrorPera">{error}</p>
      <div className="gamePlayTopRightDiv">
        {arrayNumbers.map((value, i) => (
          <button
            className="numberBTN"
            key={i}
            onClick={() => numberSelectorHandler(value)}
            style={{
              backgroundColor: value === selectedNumber ? "black" : "white",
              color: value === selectedNumber ? "white" : "black",
            }}
          >
            {value}
          </button>
        ))}
      </div>
      <h3>Select Number</h3>
    </div>
  );
};

export default NumberSelector;
