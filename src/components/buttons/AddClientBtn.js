import React from "react";

export function AddClientBtn({ clientObject, setClientObject }) {
  const onClickHandler = (e) => {
    e.preventDefault();
    setClientObject([
      ...clientObject,
      { name: "", pubShare: 0, syncRate: 0, id: Math.random() * 1000 },
    ]);
  };

  return (
    <div>
      <button onClick={onClickHandler}>Add Client</button>
    </div>
  );
}
