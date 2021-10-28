import React from "react";

export function Amount({ amount, setAmount }) {
  const amountHandler = (e) => {
    try {
      let amountNum = e.target.value.match(/[0-9]|,|\./g).join("");
      setAmount(amountNum);
    } catch (e) {
      setAmount("");
    }
  };

  return (
    <div className="flexGroup border marginBotton comp">
      <p> Enter Amount: $</p>{" "}
      <input
        onChange={amountHandler}
        type="text"
        value={amount ? amount : ""}
      />
    </div>
  );
}
