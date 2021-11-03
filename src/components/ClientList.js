import React from "react";
import { Client } from "./Client";

//container for client components, which renders a list of all clients in the 'clientObject' state array

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
