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
      const commaRemoval = amount.replaceAll(",", "");
      const numAmount = parseFloat(commaRemoval);
      const npsArray = clientObject.map(
        (i) => numAmount * i.pubShare * i.syncRate
      );
      const reducer = (accumulator, curr) => accumulator + curr;
      const nps = numAmount - npsArray.reduce(reducer);
      setResultStatus(true);
      setErrorMessage("");
      setNpsResult(nps);
      // check shares equal 100%
      const shareArr = clientObject.map((i) => i.pubShare);
      const shareTotal = shareArr.reduce(reducer);
      console.log(shareTotal);
    }
  };

  return (
    <div>
      <button onClick={handleCalc}> Calculate </button>
    </div>
  );
}
