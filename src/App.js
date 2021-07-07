import "./App.css";
import Modal from "./Modal";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const isValid = value.length === 8;
  return (
    <div className="App">
      <h1>Localizando</h1>
      <div>Digite o CEP</div>
      <label>
        <input
          type="text"
          name="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setIsOpen(true)} disabled={!isValid}>
          {" "}
          Pesquisar{" "}
        </button>
      </label>
      {isOpen ? <Modal zip={value} onClose={() => setIsOpen(false)} /> : null}
    </div>
  );
}

export default App;
