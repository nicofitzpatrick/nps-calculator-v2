import React from "react";

export function ResetBtn({
  setAmount,
  setClientObject,
  setNpsResult,
  setErrorMessage,
}) {
  const handleReset = () => {
    setAmount("");
    setClientObject([
      { name: "", pubShare: 0, syncRate: 0, id: Math.random() * 1000 },
    ]);
    setNpsResult("");
    setErrorMessage("");
  };
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
