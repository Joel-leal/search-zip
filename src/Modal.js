import React, { useEffect, useState } from "react";
import "./App.css";

function Modal({ onClose = () => {}, zip = "" }) {
  const [zipInfo, setZipInfo] = useState({
    cep: "carregando...",
    logradouro: "carregando...",
    complemento: "carregando...",
    bairro: "carregando...",
    localidade: "carregando...",
    uf: "carregando...",
    ibge: "carregando...",
    gia: "carregando...",
    ddd: "carregando...",
    siafi: "carregando...",
  });
  useEffect(() => {
    fetch(`https://viacep.com.br/ws/${zip}/json/`)
      .then((response) => response.json())
      .then((data) => setZipInfo(data));
  }, [zip]);
  return (
    <div className="container">
      <label className="logradouro">Logradouro: {zipInfo.logradouro}</label>
      <label className="bairro">Bairro: {zipInfo.bairro}</label>
      <label className="cidade">Cidade: {zipInfo.localidade}</label>
      <label className="uf">UF: {zipInfo.uf}</label>
      <iframe
        width="600"
        height="450"
        title="busca"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=${zip}&key=AIzaSyDaMzkE0Xlo_PeFAgEb0CYvV461AMf5J1k`}
      ></iframe>
      <button onClick={onClose}>fechar</button>
    </div>
  );
}
export default Modal;
