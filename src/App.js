import "./App.css";
import "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
      </header>
      <div className="container">
        <section className="primaryBox">
          <p>Input the amount and currencies you would like to convert below</p>
          <Form.js />
        </section>
        <section className="secondaryBox"></section>

        <footer>
          Foto de Anthony 🙂:
          https://www.pexels.com/es-es/foto/monedas-redondas-de-plata-y-marron-157520/
        </footer>
      </div>
    </div>
  );
}

export default App;
