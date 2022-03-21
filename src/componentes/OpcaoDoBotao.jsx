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
        atualizarContagem([1,classeRetorno]);
        atualizarPerguntas(classeRetorno)
      }}
      className={classe}
    >
      {texto}
    </button>
  );
}
