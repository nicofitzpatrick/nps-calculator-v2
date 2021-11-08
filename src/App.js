import React, { useState, useEffect } from "react";

//Styles
import "./App.css";

//Components
import { Amount } from "./components/Amount";
import { ClientList } from "./components/ClientList";
import { Result } from "./components/Result";
import { ResetBtn } from "./components/buttons/ResetBtn";
import { AddClientBtn } from "./components/buttons/AddClientBtn";

function App() {
  //state
  const [clientObject, setClientObject] = useState([
    { name: "", pubShare: 0, syncRate: 0, id: new Date().valueOf() },
  ]);
  const [amount, setAmount] = useState("");
  const [npsResult, setNpsResult] = useState("");
  const [copyFade, setCopyFade] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  //function to convert stringed numbers to floats and round to 2dp
  const rounded = (num) => {
    const numConv = parseFloat(num);
    return Math.round((numConv + Number.EPSILON) * 100) / 100;
  };

  //function to remove commas from the 'amount state' and convert to a float
  const convertAmount = (a) => {
    const removeC = a.replaceAll(",", "");
    return parseFloat(removeC);
  };

  //main function which calcualtes nps if conditions are met
  useEffect(() => {
    const reducer = (accumulator, curr) => accumulator + curr;
    const shareArr = clientObject.map((i) => i.pubShare);
    const shareTotal = shareArr.reduce(reducer);

    // check rate is higher than 0% but does not exceed 100%
    const rateCheck = clientObject.every(
      (i) => i.syncRate !== 0 && i.syncRate > 0 && i.syncRate <= 1
    );

    // calcualte nps only if the amount has been entered, shares total 100% and rates are valid
    if (amount === "" || shareTotal !== 1 || !rateCheck) {
      setNpsResult("");
    } else {
      const convertedAmount = convertAmount(amount);
      const npsArray = clientObject.map(
        (i) => convertedAmount * i.pubShare * (1 - i.syncRate)
      );
      const nps = npsArray.reduce(reducer);
      const npsRounded = rounded(nps);
      const npsToLocaleString = npsRounded.toLocaleString();
      setNpsResult(npsToLocaleString);
    }
  }, [amount, clientObject]);

  const handleDarkMode = () => {
    if (darkMode) {
      document.body.style.backgroundColor = "white";
      document.querySelector(".result").style.color = "black";
      setDarkMode(false);
    } else {
      document.body.style.backgroundColor = "black";
      document.querySelector(".result").style.color = "white";
      setDarkMode(true);
    }
  };

  return (
    <div>
      <div className="center">
        <h1 onClick={handleDarkMode} className="title">
          NPS Calculator
        </h1>
      </div>

      <Amount amount={amount} setAmount={setAmount} />
      <ClientList
        clientObject={clientObject}
        setClientObject={setClientObject}
      />

      <AddClientBtn
        clientObject={clientObject}
        setClientObject={setClientObject}
      />
      <p className="resultTitle">Result:</p>
      <Result
        npsResult={npsResult}
        clientObject={clientObject}
        amount={amount}
        rounded={rounded}
        convertAmount={convertAmount}
        copyFade={copyFade}
        setCopyFade={setCopyFade}
        darkMode={darkMode}
      />
      <ResetBtn
        setAmount={setAmount}
        setClientObject={setClientObject}
        setNpsResult={setNpsResult}
      />
    </div>
  );
}

export default App;
