import React from "react";
import "./App.css";

function Response({ onClose = () => {} }) {
  return (
    <div className="container">
      <label className="logradouro">Logradouro:</label>
      <label className="bairro">Bairro:</label>
      <label className="cidade">Cidade</label>
      <button onClick={onClose}>fechar</button>
    </div>
  );
}
export default Response;
