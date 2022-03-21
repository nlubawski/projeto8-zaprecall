import React from "react";

export default function OpcaoDoBotao({
  atualizarContagem,
  classe,
  clicada,
  classeRetorno,
  texto,
  viraCacete,
}) {
  //const [clicado, setClicado] = React.useState(false)
  //     return !clicado ? (
  //         <button onClick={() => {
  //             setClicado(!clicado)
  //             atualizarContagem(1)
  //             clicada(classeRetorno)
  //             }
  //         } className={classe}>Não Lembrei</button>
  //     ) : <></>
  //
  //

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
