import React from "react";

export function CalculateBtn({
  amount,
  clientObject,
  setNpsResult,
  setResultStatus,
  setErrorMessage,
}) {
  const handleCalc = (e) => {
    if (amount === "") {
      setErrorMessage("enter amount");
    } else if (clientObject.length === 0) {
      setErrorMessage("add at least one client");
    } else {
      const numAmount = parseFloat(amount);
      const npsArray = clientObject.map(
        (i) => numAmount * i.pubShare * i.syncRate
      );
      const reducer = (accumulator, curr) => accumulator + curr;
      const nps = numAmount - npsArray.reduce(reducer);
      setResultStatus(true);
      setErrorMessage("");
      setNpsResult(nps);
    }
  };

  return (
    <div>
      <button onClick={handleCalc}> Calculate </button>
    </div>
  );
}
