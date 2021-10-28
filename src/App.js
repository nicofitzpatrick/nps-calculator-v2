import React, { useState, useEffect } from "react";

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
  const [errorMessage, setErrorMessage] = useState("");

  //effect
  useEffect(() => {
    if (resultStatus) {
      if (amount === "") {
        setNpsResult(0);
      } else {
        const numAmount = parseFloat(amount);
        const npsArray = clientObject.map(
          (i) => numAmount * i.pubShare * i.syncRate
        );
        const reducer = (accumulator, curr) => accumulator + curr;
        const nps = numAmount - npsArray.reduce(reducer);
        setNpsResult(nps);
      }
    }
  }, [amount, clientObject, resultStatus, npsResult]);

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
          setErrorMessage={setErrorMessage}
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
      <p>{errorMessage}</p>
    </div>
  );
}

export default App;
