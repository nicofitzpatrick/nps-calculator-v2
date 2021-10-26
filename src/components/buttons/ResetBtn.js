import React from "react";

export function ResetBtn({
  setAmount,
  setClientObject,
  setNpsResult,
  setResultStatus,
}) {
  const handleReset = () => {
    setAmount("");
    setClientObject([]);
    setNpsResult("");
    setResultStatus(false);
  };
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
