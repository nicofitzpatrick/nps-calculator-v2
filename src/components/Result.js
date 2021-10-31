import React from "react";

export function Result({ npsResult, clientObject, amount, rounded }) {
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
            return `($${rounded(amount * i.pubShare)} less ${
              i.syncRate * 100
            }%)`;
          } else {
            return ` + ($${rounded(amount * i.pubShare)} less ${
              i.syncRate * 100
            }%)`;
          }
        })}{" "}
      </p>
      {/* <p>NPS = {npsResult ? `$${rounded(npsResult)}` : ""}</p> */}
      <p>NPS = {npsResult === "" ? npsResult : `$${npsResult}`}</p>
    </div>
  );
}
