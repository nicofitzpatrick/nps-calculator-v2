import React from "react";
import { Client } from "./Client";

export function ClientList({ clientObject, setClientObject }) {
  return (
    <div>
      <ul>
        {clientObject.map((i) => (
          <Client
            key={i.id}
            id={i.id}
            clientObject={clientObject}
            setClientObject={setClientObject}
          />
        ))}
      </ul>
    </div>
  );
}
