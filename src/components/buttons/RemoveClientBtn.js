import React from "react";

export function RemoveClientBtn({
  clientObject,
  setClientObject,
  setResultStatus,
  id,
}) {
  const onClickHandler = (e) => {
    e.preventDefault();
    const componentId = parseFloat(e.target.id);
    let newA = clientObject.filter((client) => client.id !== componentId);
    setClientObject(newA);
    setResultStatus(false);
  };

  return (
    <div>
      <span onClick={onClickHandler} id={id} className="close">
        &times;
      </span>
    </div>
  );
}
