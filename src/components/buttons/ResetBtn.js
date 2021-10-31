import React from "react";

export function ResetBtn({
  setAmount,
  setClientObject,
  setNpsResult,
  setResultStatus,
  setErrorMessage,
}) {
  const handleReset = () => {
    setAmount("");
    setClientObject([]);
    setNpsResult("");
    setResultStatus(false);
    setErrorMessage("");
  };
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
