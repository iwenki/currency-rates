import React, {useState} from "react";
import axios from "axios";
import Result from './Result.js';

export default function Form(props){
  let [base, setBase]= useState(props.defaultBase);
  let [currencies, setCurrencies]= useState(null);

  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleResponse(response){
    setCurrencies(response);
  }
  function search() {
    const apiKey = "b1dc8907c11f6a0fba1c6287831a15d6";
    let apiUrl = `https://api.exchangeratesapi.io/v1/2013-03-16?access_key=${apiKey}&base=${base}&symbols=USD,CAD,PLN`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div>
    <div className="informationInput">
      <form onSubmit={handleSubmit}>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue={props.defaultBase}>European Union Euro</option>
          <option value="BHD">Bahraini Dinar</option>
          <option value="OMR">Omani Rial</option>
          <option value="GTQ">Guatemalan Quetzal </option>
          <option value="KWD">Kuwaiti Dinar</option>
          <option value="USD">U.S. Dollar</option>
          <option value="GBP">British Pound</option>
          <option value="MXN">Mexico Peso</option>
          <option value="JPY">Japan Yen</option>
          <option value="BRL">Brazil Real</option>
          <option value="GHS">Ghana New Cedi</option>
        </select>
      </form>
    </div>
    <Result results={currencies}/>
    </div>
  );
}