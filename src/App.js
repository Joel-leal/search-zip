import "./App.css";
import Response from "./Response";
import React, { useState } from "react";

function App() {
  const [getCep, setStateCep] = useState(false);
  return (
    <div className="App">
      <h1>Localizando</h1>
      <div>Digite o CEP</div>
      <label>
        <input type="text" name="name" />
        <button onClick={() => setStateCep(true)}> Pesquisar </button>
      </label>
      {getCep ? <Response onClose={() => setStateCep(false)} /> : null}
    </div>
  );
}

export default App;
