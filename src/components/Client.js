import React from "react";

export function Client({ clientObject, setClientObject, id }) {
  const nameHandler = (e) => {
    setClientObject(
      (prev) => [...prev],
      (clientObject[clientObject.findIndex((client) => client.id === id)].name =
        e.target.value)
    );
  };

  const pubShareHandler = (e) => {
    setClientObject(
      (prev) => [...prev],
      (clientObject[
        clientObject.findIndex((client) => client.id === id)
      ].pubShare = e.target.value / 100)
    );
  };

  const syncRateHandler = (e) => {
    setClientObject(
      (prev) => [...prev],
      (clientObject[
        clientObject.findIndex((client) => client.id === id)
      ].syncRate = e.target.value / 100)
    );
  };

  const handleX = () => {
    console.log("working");
  };

  return (
    <div className="border marginBotton comp">
      <div className="flexGroup">
        <p> Client Name: </p>{" "}
        <input onChange={nameHandler} type="text" id={id} />
        (// remove client)
        <h2 onClick={handleX} className="leftMargin">
          X
        </h2>
      </div>{" "}
      <div className="flexGroup">
        <div className="flexGroup">
          <p> Share: </p>{" "}
          <input
            onChange={pubShareHandler}
            className="smallerInputBox"
            type="text"
          />
          <p> % </p>{" "}
        </div>{" "}
        <div className="flexGroup ">
          <p className="leftMargin"> Sync Rate: </p>{" "}
          <input
            onChange={syncRateHandler}
            className="smallerInputBox"
            type="text"
          />
          <p> % </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
