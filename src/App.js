import React, { useState, useEffect } from "react";

// Styles
import "./App.css";

//Import Components
import { Amount } from "./components/Amount";
import { ClientList } from "./components/ClientList";
import { Result } from "./components/Result";
import { ResetBtn } from "./components/buttons/ResetBtn";
import { AddClientBtn } from "./components/buttons/AddClientBtn";

function App() {
  //state
  const [clientObject, setClientObject] = useState([
    { name: "", pubShare: 0, syncRate: 0, id: Math.random() * 1000 },
  ]);
  const [amount, setAmount] = useState("");
  const [amountRounded, setAmountRounded] = useState("");
  const [npsResult, setNpsResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const rounded = (num) => {
    const numConv = parseFloat(num);
    return Math.round((numConv + Number.EPSILON) * 100) / 100;
  };

  //effect
  useEffect(() => {
    const reducer = (accumulator, curr) => accumulator + curr;
    const shareArr = clientObject.map((i) => i.pubShare);
    const shareTotal = shareArr.reduce(reducer);
    const commaRemoval = amount.replaceAll(",", "");
    const numAmount = parseFloat(commaRemoval);
    setAmountRounded(numAmount);
    if (amount === "") {
      setAmountRounded(0);
      setNpsResult("");
    } else if (shareTotal !== 1) {
      setNpsResult("");
    } else {
      const npsArray = clientObject.map(
        (i) => numAmount * i.pubShare * i.syncRate
      );
      const nps = numAmount - npsArray.reduce(reducer);
      const npsRounded = rounded(nps);
      setErrorMessage("");
      setNpsResult(npsRounded);
    }
  }, [amount, clientObject, npsResult]);

  return (
    <div>
      <h1>NPS Calculator</h1>
      <Amount amount={amount} setAmount={setAmount} />
      <ClientList
        clientObject={clientObject}
        setClientObject={setClientObject}
      />

      <div className="btns">
        <AddClientBtn
          clientObject={clientObject}
          setClientObject={setClientObject}
          setErrorMessage={setErrorMessage}
        />
        <ResetBtn
          setAmount={setAmount}
          setClientObject={setClientObject}
          setNpsResult={setNpsResult}
          setErrorMessage={setErrorMessage}
        />
      </div>

      <Result
        npsResult={npsResult}
        clientObject={clientObject}
        amountRounded={amountRounded}
        rounded={rounded}
      />

      <p>{errorMessage}</p>
    </div>
  );
}

export default App;
