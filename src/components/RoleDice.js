import React, {useState} from "react";
import "./RoleDice.css";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const RoleDice = ({ currentDice, roleDice, setScore }) => {
  const resetScore = () => {
    setScore(0);
  };

  const [modal, setModal] = useState(false);

  return (
    <>
      <div>
        <Modal
        isOpen={modal}
        toggle={() => setModal(!modal)}
        >
          <ModalHeader
          toggle={() => setModal(!modal)}
          ><b>Rules</b></ModalHeader>
          <ModalBody
          >
            <p>
              <b>1. First You Have To Select A Number Which Is Right Corner.</b>
              <br />
              <b>2. Then Click On Dice To Roll The Dice.</b>
            </p>
            
            <p>
              3. If the number on the dice matches the number you have chosen, then the number you have chosen will be plus the maximum number.
              <br />
              4. If the number on the dice does not match the number you have chosen, then the number you have chosen will be minus the maximum number.
              </p>
              </ModalBody>
        </Modal>
      </div>

      <div className="gamePlayBottomMain">
        <div className="dice" onClick={roleDice}>
          <img
            src={`/images/dice_${currentDice}.png`}
            className="dice"
            alt="dice 1"
          />
        </div>
        <p>Click On Dice To Roll</p>
        <button className="mainBtn1" onClick={resetScore}>
          Reset Score
        </button>
        <button className="mainBtn2" onClick={()=> setModal(true)}>Show Rules</button>
      </div>
    </>
  );
};

export default RoleDice;
