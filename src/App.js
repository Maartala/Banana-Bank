import { useState } from 'react';
import './App.css';

function App() {

  let [count, setCount] = useState(0);
  let [value, setValue] = useState(0);

  const einzahlen = () => {
    setCount(count + value)
  }

  const auszahlen = () => {
    setCount(count - value)
  }

  let change = (elt) => {
    setValue(Number(elt.target.value))
  }

  return (
    <div className="App">
      <body>
        <header className='header'>
          <h1 id='title'>Banana Bank</h1>
        </header>
        <main>
          <section className='konto'>
            <div className='saldo'> {count} €</div>
            <input type="number" name="" onChange={change} value={value} id="geldbetrag" placeholder='Gib einen Geldbetrag ein' /><br />
            <button className='einzahlen' onClick={einzahlen}>Einzahlen</button>
            <button className='auszahlen' onClick={auszahlen}>Auszahlen</button>
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
