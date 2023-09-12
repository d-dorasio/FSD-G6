import React, { useState, useEffect } from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";

function CurrencyConverter() {
  const [amountOne, setAmountOne] = useState("");
  const [currencyOne, setCurrencyOne] = useState("USD");
  const [currencyTwo, setCurrencyTwo] = useState("ARS");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [amountTwo, setAmountTwo] = useState(0);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.rates[currencyTwo]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [currencyOne, currencyTwo]);

  const handleCurrencyOneChange = (event) => {
    setCurrencyOne(event.target.value);
  };

  const handleAmountOneChange = (event) => {
    setAmountOne(event.target.value);
  };

  const handleCurrencyTwoChange = (event) => {
    setCurrencyTwo(event.target.value);
  };

  const calculate = () => {
    if (exchangeRate) {
      const convertedAmount = parseFloat(amountOne) * exchangeRate;

      setAmountTwo(convertedAmount);
    }
  };

  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div style={{ paddingTop: "64px", paddingLeft: "300px" }}>
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
                    <option value="AED">AED</option>
                    <option value="ARS">ARS</option>
                    <option value="AUD">AUD</option>
                    <option value="BGN">BGN</option>
                    <option value="BRL">BRL</option>
                    <option value="BSD">BSD</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CLP">CLP</option>
                    <option value="CNY">CNY</option>
                    <option value="COP">COP</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="DOP">DOP</option>
                    <option value="EGP">EGP</option>
                    <option value="EUR">EUR</option>
                    <option value="FJD">FJD</option>
                    <option value="GBP">GBP</option>
                    <option value="GTQ">GTQ</option>
                    <option value="HKD">HKD</option>
                    <option value="HRK">HRK</option>
                    <option value="HUF">HUF</option>
                    <option value="IDR">IDR</option>
                    <option value="ILS">ILS</option>
                    <option value="INR">INR</option>
                    <option value="ISK">ISK</option>
                    <option value="JPY">JPY</option>
                    <option value="KRW">KRW</option>
                    <option value="KZT">KZT</option>
                    <option value="MXN">MXN</option>
                    <option value="MYR">MYR</option>
                    <option value="NOK">NOK</option>
                    <option value="NZD">NZD</option>
                    <option value="PAB">PAB</option>
                    <option value="PEN">PEN</option>
                    <option value="PHP">PHP</option>
                    <option value="PKR">PKR</option>
                    <option value="PLN">PLN</option>
                    <option value="PYG">PYG</option>
                    <option value="RON">RON</option>
                    <option value="RUB">RUB</option>
                    <option value="SAR">SAR</option>
                    <option value="SEK">SEK</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="TRY">TRY</option>
                    <option value="TWD">TWD</option>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="UYU">UYU</option>
                    <option value="VND">VND</option>
                    <option value="ZAR">ZAR</option>
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
                  <option value="AED">AED</option>
                  <option value="ARS">ARS</option>
                  <option value="AUD">AUD</option>
                  <option value="BGN">BGN</option>
                  <option value="BRL">BRL</option>
                  <option value="BSD">BSD</option>
                  <option value="CAD">CAD</option>
                  <option value="CHF">CHF</option>
                  <option value="CLP">CLP</option>
                  <option value="CNY">CNY</option>
                  <option value="COP">COP</option>
                  <option value="CZK">CZK</option>
                  <option value="DKK">DKK</option>
                  <option value="DOP">DOP</option>
                  <option value="EGP">EGP</option>
                  <option value="EUR">EUR</option>
                  <option value="FJD">FJD</option>
                  <option value="GBP">GBP</option>
                  <option value="GTQ">GTQ</option>
                  <option value="HKD">HKD</option>
                  <option value="HRK">HRK</option>
                  <option value="HUF">HUF</option>
                  <option value="IDR">IDR</option>
                  <option value="ILS">ILS</option>
                  <option value="INR">INR</option>
                  <option value="ISK">ISK</option>
                  <option value="JPY">JPY</option>
                  <option value="KRW">KRW</option>
                  <option value="KZT">KZT</option>
                  <option value="MXN">MXN</option>
                  <option value="MYR">MYR</option>
                  <option value="NOK">NOK</option>
                  <option value="NZD">NZD</option>
                  <option value="PAB">PAB</option>
                  <option value="PEN">PEN</option>
                  <option value="PHP">PHP</option>
                  <option value="PKR">PKR</option>
                  <option value="PLN">PLN</option>
                  <option value="PYG">PYG</option>
                  <option value="RON">RON</option>
                  <option value="RUB">RUB</option>
                  <option value="SAR">SAR</option>
                  <option value="SEK">SEK</option>
                  <option value="SGD">SGD</option>
                  <option value="THB">THB</option>
                  <option value="TRY">TRY</option>
                  <option value="TWD">TWD</option>
                  <option value="UAH">UAH</option>
                  <option value="USD">USD</option>
                  <option value="UYU">UYU</option>
                  <option value="VND">VND</option>
                  <option value="ZAR">ZAR</option>
                </select>

                <input
                  type="number"
                  id="cantidad-dos"
                  placeholder="0"
                  className="campo-form"
                  value={amountTwo}
                  readOnly
                />
                <div className="taza-cambio-container">
                  <button
                    className="btn boton-form"
                    id="taza"
                    onClick={(event) => calculate(event)}
                  >
                    Calcular
                  </button>
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
