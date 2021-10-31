import React from "react";

export function CalculateBtn({
  amount,
  clientObject,
  setNpsResult,
  setResultStatus,
  setErrorMessage,
  rounded,
}) {
  const handleCalc = (e) => {
    if (amount === "") {
      setErrorMessage("enter amount");
    } else if (clientObject.length === 0) {
    } else {
      const reducer = (accumulator, curr) => accumulator + curr;
      const shareArr = clientObject.map((i) => i.pubShare);
      const shareTotal = shareArr.reduce(reducer);

      if (shareTotal !== 1) {
        setErrorMessage("Shares must equal 100%");
      } else {
        const commaRemoval = amount.replaceAll(",", "");
        const numAmount = parseFloat(commaRemoval);
        const npsArray = clientObject.map(
          (i) => numAmount * i.pubShare * i.syncRate
        );
        const nps = numAmount - npsArray.reduce(reducer);
        const npsRounded = rounded(nps);
        setResultStatus(true);
        setErrorMessage("");
        setNpsResult(npsRounded);
      }
    }
  };

  return (
    <div>
      <button onClick={handleCalc}> Calculate </button>
    </div>
  );
}
