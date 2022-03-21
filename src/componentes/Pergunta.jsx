import React from "react";
import Resposta from "./Resposta";

export default function Pergunta({
  questao,
  resposta,
  index,
  atualizarContagem,
}) {
  const [abrirPergunta, setAbrirPergunta] = React.useState(false);
  const [cartaClicada, setCartaClicada] = React.useState("");

  function clicada(className) {
    setCartaClicada(className);
  }

  let soResposta = false;

  let css = `pergunta ${cartaClicada}`;

  if (abrirPergunta) {
    if (soResposta) {
      return (
        <div className="pergunta-questao">
          <p>{questao} </p>{" "}
        </div>
      );
    } else {
      return (
        <Resposta
          resposta={resposta}
          soResposta={soResposta}
          questao={questao}
          atualizarContagem={atualizarContagem}
          clicada={clicada}
        />
      );
    }
  } else {
    return (
      <div className={css}>
        <p>Pergunta {index + 1}</p>{" "}
        <img
          onClick={() => setAbrirPergunta(!abrirPergunta)}
          src="./assets/imagens/seta.png"
          alt="ver resposta"
        />
      </div>
    );
  }
}
