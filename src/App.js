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

  const rounded = (num) => {
    const numConv = parseFloat(num);
    return Math.round((numConv + Number.EPSILON) * 100) / 100;
  };

  //effect
  useEffect(() => {
    setErrorMessage("");
    const [rateChecker] = clientObject.map((i) => {
      if (i.syncRate > 1) {
        return true;
      } else {
        return false;
      }
    });

    if (resultStatus) {
      console.log("effect is triggered");
      if (amount === "") {
        setNpsResult(0);
      } else if (rateChecker) {
        setErrorMessage("rates cannot exceed 100%");
        setNpsResult("");
      } else {
        const reducer = (accumulator, curr) => accumulator + curr;
        const shareArr = clientObject.map((i) => i.pubShare);
        const shareTotal = shareArr.reduce(reducer);
        if (shareTotal !== 1) {
          setNpsResult("");
        } else {
          const commaRemoval = amount.replaceAll(",", "");
          const numAmount = parseFloat(commaRemoval);

          const npsArray = clientObject.map(
            (i) => numAmount * i.pubShare * i.syncRate
          );
          const nps = numAmount - npsArray.reduce(reducer);
          const npsRounded = rounded(nps);
          setErrorMessage("");
          setNpsResult(npsRounded);
        }
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

      <div className="btns">
        <CalculateBtn
          amount={amount}
          clientObject={clientObject}
          setNpsResult={setNpsResult}
          setResultStatus={setResultStatus}
          setErrorMessage={setErrorMessage}
          rounded={rounded}
        />
        <ResetBtn
          setAmount={setAmount}
          setClientObject={setClientObject}
          setNpsResult={setNpsResult}
          setResultStatus={setResultStatus}
          setErrorMessage={setErrorMessage}
        />
        <AddClientBtn
          clientObject={clientObject}
          setClientObject={setClientObject}
          setErrorMessage={setErrorMessage}
        />
      </div>

      {resultStatus && (
        <Result
          npsResult={npsResult}
          clientObject={clientObject}
          amount={amount}
          rounded={rounded}
        />
      )}

      <p>{errorMessage}</p>
    </div>
  );
}

export default App;
