import React from "react";

export function Result({
  npsResult,
  clientObject,
  amount,
  rounded,
  convertAmount,
}) {
  const convertedAmount = amount === "" ? 0 : convertAmount(amount);

  return (
    <div className="border marginBotton comp">
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
      <p>NPS = {typeof npsResult === "string" ? npsResult : `$${npsResult}`}</p>
    </div>
  );
}
