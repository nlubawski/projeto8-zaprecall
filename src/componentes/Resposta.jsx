import React from "react";
import OpcaoDoBotao from "./OpcaoDoBotao";

export default function Resposta({
  resposta,
  soResposta,
  questao,
  atualizarContagem,
  clicada,
}) {
  const [abrirResposta, setAbrirResposta] = React.useState(false);

  if (abrirResposta) {
    return (
      <div className="pergunta-resposta pergunta-resposta-virada ">
        <p>{resposta} </p>
        <div className="pergunta-resposta-opcoes">
          <OpcaoDoBotao
            atualizarContagem={atualizarContagem}
            clicada={clicada}
            classe={"opcoes-nao-lembrei"}
            classeRetorno={"errou"}
            texto={"Não Lembrei"}
          />
          <OpcaoDoBotao
            atualizarContagem={atualizarContagem}
            clicada={clicada}
            classe={"opcoes-quase-lembrei"}
            classeRetorno={"quase"}
            texto={"Quase Lembrei"}
          />
          <OpcaoDoBotao
            atualizarContagem={atualizarContagem}
            clicada={clicada}
            classe={"opcoes-zap"}
            classeRetorno={"zap"}
            texto={"Zap"}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="pergunta-resposta">
        {" "}
        <p>{questao} </p>
        <img
          onClick={() => {
            soResposta = true;
            setAbrirResposta(!abrirResposta);
          }}
          src="./assets/imagens/virar.png"
          alt="abrir pergunta"
        />
      </div>
    );
  }
}
