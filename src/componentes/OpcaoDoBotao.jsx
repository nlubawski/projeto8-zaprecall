import React from "react";

export default function OpcaoDoBotao({
  atualizarContagem,
  classe,
  clicada,
  classeRetorno,
  texto,
  viraCacete,
}) {

  return (
    <button
      onClick={() => {
        atualizarContagem(1);
        clicada(classeRetorno);
      }}
      className={classe}
    >
      {texto}
    </button>
  );
}
