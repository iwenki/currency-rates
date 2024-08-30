import "./App.css";
import Form from './Form.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Historical Exchange Rates</h1>
      </header>
      <div className="container">
        <section className="primaryBox">
          <p>Select the date, base currency and output currency</p>
          <Form/>
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
