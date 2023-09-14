import React, { useState, useEffect } from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";


function CurrencyConverter() {
  const [amountOne, setAmountOne] = useState("");
  const [currencyOne, setCurrencyOne] = useState("USD");
  const [currencyTwo, setCurrencyTwo] = useState("ARS");
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.rates);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [currencyOne]);

  const calculateEvent = () => {
    console.log("Swapping currencies");
    setCurrencyOne(currencyTwo);
    setCurrencyTwo(currencyOne);
  };

  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            <section className="converter">
              <h1 className="h1-center">Currency Converter</h1>

              <div className="invert-container form-container">
                <select
                  name="currencyOne"
                  id="currencyOne"
                  value={currencyOne}
                  onChange={(e) => setCurrencyOne(e.target.value)}
                  className="conv-sel tipo"
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
                  type="text"
                  className="borderless campo-form"
                  name="amountOne"
                  id="amountOne"
                  value={amountOne}
                  placeholder="0"
                  onChange={(e) => {
                    setAmountOne(e.target.value);
                  }}
                />
                <br></br>
                <button
                  title="Swap currencies"
                  className="button boton-form"
                  id="swapButton"
                  onClick={calculateEvent}
                >
                  Intercambiar
                </button>
                <br></br>
                <select
                  name="currencyTwo"
                  id="currencyTwo"
                  value={currencyTwo}
                  onChange={(e) => setCurrencyTwo(e.target.value)}
                  className="conv-sel tipo"
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
                  type="text"
                  className="borderless-disabled campo-form"
                  name="amountTwo"
                  id="amountTwo"
                  placeholder="0"
                  value={(amountOne * exchangeRates[currencyTwo]).toFixed(2)}
                  disabled
                />
                <div className="price" id="price">
                  1 {currencyOne} es igual a {exchangeRates[currencyTwo]}{" "}
                  {currencyTwo}{" "}
                </div>
              </div>
            </section>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default CurrencyConverter;
