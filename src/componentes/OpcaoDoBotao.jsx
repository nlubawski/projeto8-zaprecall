import React from "react";

export default function OpcaoDoBotao({
  atualizarContagem,
  classe,
  classeRetorno,
  texto,
  atualizarPerguntas
}) {

  return (
    <button
      onClick={() => {
        atualizarContagem(1);
        atualizarPerguntas(classeRetorno)
        console.log()
      }}
      className={classe}
    >
      {texto}
    </button>
  );
}
