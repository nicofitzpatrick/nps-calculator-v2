import React from "react";
import clipboard from "../clipboard.svg";

//renders each client name, the rate (i.e. 'working out') and the NPS

export function Result({
  npsResult,
  clientObject,
  amount,
  rounded,
  convertAmount,
}) {
  const convertedAmount = amount === "" ? 0 : convertAmount(amount);

  const handleResultCopy = (e) => {
    console.log(e.target.outerText);
  };

  return (
    <div onClick={handleResultCopy} className="result">
      <p>
        Client(s):{" "}
        {clientObject.map((i) => {
          if (clientObject.indexOf(i) === 0) {
            return i.name;
          } else {
            return ` / ${i.name}`;
          }
        })}
      </p>
      <p>
        Rate:{" "}
        {clientObject.map((i) => {
          if (clientObject.indexOf(i) === 0) {
            return `($${rounded(convertedAmount * i.pubShare)} less ${rounded(
              i.syncRate * 100
            )}%)`;
          } else {
            return ` + ($${rounded(
              convertedAmount * i.pubShare
            )} less ${rounded(i.syncRate * 100)}%)`;
          }
        })}{" "}
      </p>
      <p className={npsResult !== "" ? "npsResult" : ""}>
        NPS = {typeof npsResult === "string" ? npsResult : `$${npsResult}`}
      </p>
      <img src={clipboard} alt="Clipboard" className="clip" />
    </div>
  );
}
