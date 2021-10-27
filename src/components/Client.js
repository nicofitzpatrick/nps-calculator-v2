import React from "react";
import { RemoveClientBtn } from "./buttons/RemoveClientBtn";

export function Client({ clientObject, setClientObject, id, setResultStatus }) {
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

  return (
    <div className="border marginBotton comp">
      <div className="flexGroup">
        <p> Client Name: </p>{" "}
        <input onChange={nameHandler} type="text" id={id} />
        <RemoveClientBtn
          clientObject={clientObject}
          setClientObject={setClientObject}
          setResultStatus={setResultStatus}
          id={id}
        />
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
