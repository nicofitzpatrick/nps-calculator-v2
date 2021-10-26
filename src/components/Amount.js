import React from "react";

export function Amount({ amount, setAmount }) {
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="flexGroup border marginBotton comp">
      <p> Enter Amount: </p>{" "}
      <input
        onChange={amountHandler}
        type="text"
        value={amount ? amount : ""}
      />
    </div>
  );
}
