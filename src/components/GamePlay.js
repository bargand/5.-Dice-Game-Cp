import React, { useState } from "react";
import "./GamePlay.css";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const roleDice = () => {
    if(!selectedNumber){
      setError("You Have Not Selected Any Number")
      return
    }
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice((prev) => randomNumber);


    if (selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber);
    }
    else{
      setScore((prev)=> prev-1)
    }
    setSelectedNumber(undefined);

  };

  return (
    <div className="gamePlayMain">
      <div className="gamePlayTop">
        <TotalScore score={score}/>
        <NumberSelector
        setError={setError}
        error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div className="gamePlayBotom">
        <RoleDice currentDice={currentDice} roleDice={roleDice} setScore={setScore}/>
      </div>
    </div>
  );
};

export default GamePlay;
