import React from "react";

export function Result({ npsResult, clientObject, amount }) {
  const rounded = (num) => {
    const numConv = parseFloat(num);
    return Math.round((numConv + Number.EPSILON) * 100) / 100;
  };

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
      <p>NPS = ${rounded(npsResult)}</p>
    </div>
  );
}
