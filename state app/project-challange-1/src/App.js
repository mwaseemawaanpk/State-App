import React, { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isopen, setIsopen] = useState(true);
  function HandlePrevious() {
    if (3 > step) {
      setStep((s) => s + 1);
    }
  }
  function HandleNext() {
    if (1 < step) {
      setStep(step - 1);
      setStep(step - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsopen(!isopen)}>
        &times;
      </button>
      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={HandleNext}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={HandlePrevious}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
