import React from "react";

//rendered within the 'Client' component, and removes client from the clientObject state array when clicked

export function RemoveClientBtn({ clientObject, setClientObject, id }) {
  const onClickHandler = (e) => {
    e.preventDefault();
    const componentId = parseFloat(e.target.id);
    let newA = clientObject.filter((client) => client.id !== componentId);
    setClientObject(newA);
  };

  return (
    <div>
      <span onClick={onClickHandler} id={id} className="close">
        &times;
      </span>
    </div>
  );
}
