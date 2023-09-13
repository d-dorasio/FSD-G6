import React, { useState, useEffect } from "react";
import NavBar from './navHB';
import Header from './headerHB';
import Footer from './footerHB';

function CurrencyConverter() {
  const [currencyOne, setCurrencyOne] = useState("ARS");
  const [amountOne, setAmountOne] = useState(1);
  const [currencyTwo, setCurrencyTwo] = useState("USD");
  const [amountTwo, setAmountTwo] = useState("");
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    calculate();
  }, []);

  const handleCurrencyOneChange = (e) => {
    setCurrencyOne(e.target.value);
  };

  const handleAmountOneChange = (e) => {
    setAmountOne(e.target.value);
  };

  const handleCurrencyTwoChange = (e) => {
    setCurrencyTwo(e.target.value);
  };

  const calculate = () => {
    const moneda_one = currencyOne;
    const moneda_two = currencyTwo;

    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
      .then((res) => res.json())
      .then((data) => {
        const taza = data.rates[moneda_two];

        setExchangeRate(taza);
        setAmountTwo((amountOne * taza).toFixed(2));
      });
  };

  const swapCurrencies = () => {
    const temp = currencyOne;
    setCurrencyOne(currencyTwo);
    setCurrencyTwo(temp);
    calculate();
  };

  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div style={{ paddingTop: '64px', paddingLeft: '300px' }}>
        <main>
          <section>
            <h1 className="h1-center">Convertidor de moneda</h1>

            <form action="" className="form-container">
              <div>
                <div className="moneda">
                  <select
                    id="moneda-uno"
                    className="tipo"
                    value={currencyOne}
                    onChange={handleCurrencyOneChange}
                  >
                    {/* Add all other currency options here */}
                  </select>

                  <input
                    className="campo-form"
                    type="number"
                    id="cantidad-uno"
                    placeholder="0"
                    value={amountOne}
                    onChange={handleAmountOneChange}
                  />
                </div>

                <div className="taza-cambio-container">
                  <button
                    className="btn boton-form"
                    id="taza"
                    onClick={calculate}
                  >
                    Cambio
                  </button>

                  <div className="cambio" id="cambio">
                    {exchangeRate && (
                      <p>
                        1 {currencyOne} = {exchangeRate} {currencyTwo}
                      </p>
                    )}
                  </div>
                </div>

                <div className="moneda">
                  <select
                    id="moneda-dos"
                    className="tipo"
                    value={currencyTwo}
                    onChange={handleCurrencyTwoChange}
                  >
                    {/* Add all other currency options here */}
                  </select>

                  <input
                    type="number"
                    id="cantidad-dos"
                    placeholder="0"
                    className="campo-form"
                    value={amountTwo}
                    readOnly
                  />
                </div>
              </div>
            </form>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default CurrencyConverter;
