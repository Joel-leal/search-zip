import React, { useEffect, useState } from "react";
import "./App.css";

function Modal({ onClose = () => {}, zip = "", id = "modal" }) {
  const [returnError, setReturnError] = useState("");
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
      .then((data) => setZipInfo(data))
      .catch((error) => setReturnError(`${zip} não encontrado`));
  }, [zip]);

  const handleOutSideCLick = (e) => {
    if ((e.target.id = id)) onClose();
  };
  return (
    <div id={id} className="container" onClick={handleOutSideCLick}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="info">
          <label className="logradouro">Logradouro: {zipInfo.logradouro}</label>
          <label className="bairro">Bairro: {zipInfo.bairro}</label>
          <label className="cidade">Cidade: {zipInfo.localidade}</label>
          <label className="uf">UF: {zipInfo.uf}</label>
        </div>
        <iframe
          width="600"
          height="500"
          title="busca"
          style={{ border: "none" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?q=${zip}&key=AIzaSyDaMzkE0Xlo_PeFAgEb0CYvV461AMf5J1k`}
        ></iframe>
        <p>{returnError}</p>
        <button className="close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}
export default Modal;
