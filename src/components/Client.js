import React from "react";
import { RemoveClientBtn } from "./buttons/RemoveClientBtn";

//the client component can be rendered multiple times, and updates clientObject state for 'name,' 'pubShare,' and 'syncRate'

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

  return (
    <div className="client">
      {clientObject.length === 1 ? (
        ""
      ) : (
        <RemoveClientBtn
          clientObject={clientObject}
          setClientObject={setClientObject}
          id={id}
        />
      )}
      <div className="flexGroup spaceBottom">
        <p> Client Name: </p>{" "}
        <input
          onChange={nameHandler}
          type="text"
          id={id}
          className="input longInput"
        />
      </div>{" "}
      <div className="flexGroup">
        <div className="flexGroup">
          <p> Share: </p>{" "}
          <input
            onChange={pubShareHandler}
            className="input shortInput"
            type="number"
          />
          <p> % </p>{" "}
        </div>{" "}
        <div className="flexGroup ">
          <p className="leftMargin"> Sync Rate: </p>{" "}
          <input
            onChange={syncRateHandler}
            className="input shortInput"
            type="number"
          />
          <p> % </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
