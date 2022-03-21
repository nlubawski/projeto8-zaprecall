import React from "react";
import Resposta from "./Resposta";

export default function Pergunta({
  questao,
  resposta,
  index,
  atualizarContagem,
}) {
  const [abrirPergunta, setAbrirPergunta] = React.useState(false);
  const [respondida, setRespondida] = React.useState("");

  function atualizarPerguntas(valorDaClasse) {
    setRespondida(valorDaClasse);
  }

  let soResposta = false;

  let css = `pergunta ${respondida}`;

  if (abrirPergunta) {
    if (soResposta) {
      return (
        <div className="pergunta-questao">
          <p>{questao} </p>{" "}
        </div>
      );
    } else {
      if (respondida === "") {
        return (
          <Resposta
            resposta={resposta}
            soResposta={soResposta}
            questao={questao}
            atualizarContagem={atualizarContagem}
            atualizarPerguntas={atualizarPerguntas}
          />
        );
      } else {
        let icone = ""
        if (respondida === "errou"){
            icone = <ion-icon className="icone-errou" name="close-circle"></ion-icon>
        }else if(respondida === "quase"){
            icone = <ion-icon  className="icone-quase" name="help-circle"></ion-icon>
        }else{
            icone = <ion-icon  className="icone-zap" name="checkmark-circle"></ion-icon>
        }

        return (
          <div className={css}>
            <p>Pergunta {index + 1}</p>{" "}
            {icone}
          </div>
        );
      }
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
