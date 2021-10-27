import React, { useState } from "react";

// Styles
import "./App.css";

//Import Components
import { Amount } from "./components/Amount";
import { ClientList } from "./components/ClientList";
import { Result } from "./components/Result";
import { CalculateBtn } from "./components/buttons/CalculateBtn";
import { ResetBtn } from "./components/buttons/ResetBtn";
import { AddClientBtn } from "./components/buttons/AddClientBtn";

function App() {
  //state
  const [clientObject, setClientObject] = useState([]);
  const [amount, setAmount] = useState("");
  const [npsResult, setNpsResult] = useState("");
  const [resultStatus, setResultStatus] = useState(false);

  return (
    <div>
      <h1>NPS Calculator</h1>
      <Amount amount={amount} setAmount={setAmount} />
      <ClientList
        clientObject={clientObject}
        setClientObject={setClientObject}
        setResultStatus={setResultStatus}
      />

      {resultStatus && (
        <Result
          npsResult={npsResult}
          clientObject={clientObject}
          amount={amount}
        />
      )}
      <div className="btns">
        <CalculateBtn
          amount={amount}
          clientObject={clientObject}
          setNpsResult={setNpsResult}
          setResultStatus={setResultStatus}
        />
        <ResetBtn
          setAmount={setAmount}
          setClientObject={setClientObject}
          setNpsResult={setNpsResult}
          setResultStatus={setResultStatus}
        />
        <AddClientBtn
          clientObject={clientObject}
          setClientObject={setClientObject}
        />
      </div>
    </div>
  );
}

export default App;
