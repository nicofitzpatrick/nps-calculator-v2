import React from "react";

export function RemoveClientBtn({
  clientObject,
  setClientObject,
  setResultStatus,
}) {
  const onClickHandler = (e) => {
    e.preventDefault();
    let newA = clientObject.filter(
      (cli) => clientObject.indexOf(cli) < clientObject.length - 1
    );
    setClientObject(newA);
    setResultStatus(false);
  };

  return (
    <div>
      <button onClick={onClickHandler}> Remove Client </button>{" "}
    </div>
  );
}
