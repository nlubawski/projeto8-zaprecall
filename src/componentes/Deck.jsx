import React from "react";
import Perguntas from "./Perguntas";
import Concluidas from "./Concluidas";
import Topo from "./Topo";

export default function Deck({perguntas, reset}) {
  const [contagem, setContagem] = React.useState(0);
  const [icones, setIcones] = React.useState("");

  function atualizarContagem([valor,iconesChegando]) {
    setIcones (icones + iconesChegando + " ") 
    setContagem(contagem + valor);
  }

  return (
    <>
      <Topo />
      <Perguntas perguntas={perguntas} atualizarContagem={atualizarContagem} />
      <Concluidas contagem={contagem} icones={icones} />
    </>
  );




}
