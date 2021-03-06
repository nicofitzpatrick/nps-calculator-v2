import React from "react";

//adds and additional client object to the clientObject state

export function AddClientBtn({ clientObject, setClientObject }) {
  const onClickHandler = (e) => {
    e.preventDefault();
    setClientObject([
      ...clientObject,
      { name: "", pubShare: 0, syncRate: 0, id: new Date().valueOf() },
    ]);
  };

  return (
    <div className="center">
      <button onClick={onClickHandler} className="btn btnClient">
        Add Client
      </button>
    </div>
  );
}
