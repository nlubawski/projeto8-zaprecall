import React from "react";
import Perguntas from "./Perguntas";
import Concluidas from "./Concluidas";
import Topo from "./Topo";

export default function Deck({perguntas}) {
  const [contagem, setContagem] = React.useState(0);

  function atualizarContagem(valor) {
    setContagem(contagem + valor);
  }

  return (
    <>
      <Topo />
      <Perguntas perguntas={perguntas} atualizarContagem={atualizarContagem} />
      <Concluidas contagem={contagem} />
    </>
  );




}
