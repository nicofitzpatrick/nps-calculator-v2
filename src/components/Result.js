import React from "react";
import clipboard from "../clipboard.svg";

//renders each client name, the rate (i.e. 'working out') and the NPS

export function Result({
  npsResult,
  clientObject,
  amount,
  rounded,
  convertAmount,
  copyFade,
  setCopyFade,
}) {
  //props
  const convertedAmount = amount === "" ? 0 : convertAmount(amount);

  const handleResultCopy = () => {
    //sets state to fade out copied text
    setCopyFade("copiedFade");
    //resets copyFade state
    setTimeout(() => {
      setCopyFade("");
    }, 2000);
    // add client names to new array
    const clientArray = clientObject.map((i) => {
      if (clientObject.indexOf(i) === 0) {
        return i.name;
      } else {
        return ` / ${i.name}`;
      }
    });
    // add rate workings to new array
    const rateArray = clientObject.map((i) => {
      if (clientObject.indexOf(i) === 0) {
        return `($${rounded(convertedAmount * i.pubShare)} less ${rounded(
          i.syncRate * 100
        )}%)`;
      } else {
        return ` + ($${rounded(convertedAmount * i.pubShare)} less ${rounded(
          i.syncRate * 100
        )}%)`;
      }
    });
    //convert both arrays to strings
    const clientString = clientArray.join("");
    const rateString = rateArray.join("");
    //copy result to clipboard
    return navigator.clipboard.writeText(
      `Client(s): ${clientString}\nRate: ${rateString}\nNPS = ${npsResult}`
    );
  };

  return (
    <div className="result">
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
      <img
        src={clipboard}
        alt="Clipboard"
        className="clip"
        onClick={handleResultCopy}
      />
      <p className={`copied ${copyFade}`}>copied</p>
    </div>
  );
}
