import React from "react";

//reverts all state back to the additional starting values

export function ResetBtn({ setAmount, setClientObject, setNpsResult }) {
  const handleReset = () => {
    setAmount("");
    setClientObject([
      { name: "", pubShare: 0, syncRate: 0, id: new Date().valueOf() },
    ]);
    setNpsResult("");
  };
  return (
    <div className="center">
      <button onClick={handleReset} className="btn btnReset">
        Reset
      </button>
    </div>
  );
}
