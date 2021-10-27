import React from "react";
import { Client } from "./Client";

export function ClientList({ clientObject, setClientObject, setResultStatus }) {
  return (
    <div>
      <ul>
        {clientObject.map((i) => (
          <Client
            key={i.id}
            id={i.id}
            clientObject={clientObject}
            setClientObject={setClientObject}
            setResultStatus={setResultStatus}
          />
        ))}
      </ul>
    </div>
  );
}
