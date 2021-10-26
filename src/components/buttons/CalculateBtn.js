import React from "react";

export function CalculateBtn({
  amount,
  clientObject,
  setNpsResult,
  setResultStatus,
}) {
  const handleCalc = (e) => {
    const numAmount = parseFloat(amount);
    const npsArray = clientObject.map(
      (i) => numAmount * i.pubShare * i.syncRate
    );
    const reducer = (accumulator, curr) => accumulator + curr;
    const nps = numAmount - npsArray.reduce(reducer);
    setResultStatus(true);

    setNpsResult(nps);
  };

  return (
    <div>
      <button onClick={handleCalc}> Calculate </button>
    </div>
  );
}
