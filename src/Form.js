import axios from "axios";

export default function Form(){
  function search() {
    const apiKey = "b1dc8907c11f6a0fba1c6287831a15d6";
    let apiUrl = `https://api.exchangeratesapi.io/v1/2023-12-24?access_key=${apiKey}&base=GBP&symbols=USD,CAD,EUR`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="informationInput">
      <form>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select a base currency</option>
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
  );
}