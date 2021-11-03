import React from "react";

//the amount component is responsible for aquiring the total licensed amount

export function Amount({ amount, setAmount }) {
  const amountHandler = (e) => {
    try {
      let amountNum = e.target.value.match(/[0-9]|,|\./g).join("");
      setAmount(amountNum);
    } catch (error) {
      setAmount("");
    }
  };

  return (
    <div className="amount">
      <p> Amount: $ </p>{" "}
      <input
        onChange={amountHandler}
        type="text"
        value={amount ? amount : ""}
        className="input mediumInput"
      />
    </div>
  );
}
