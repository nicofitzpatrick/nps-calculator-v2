import React from "react";

//reverts all state back to the additional starting values

export function ResetBtn({ setAmount, setClientObject, setNpsResult }) {
  const handleReset = () => {
    setAmount("");
    setClientObject([
      { name: "", pubShare: 0, syncRate: 0, id: Math.random() * 1000 },
    ]);
    setNpsResult("");
  };
  return (
    <div className="center">
      <button onClick={handleReset} className="btn">
        Reset
      </button>
    </div>
  );
}
