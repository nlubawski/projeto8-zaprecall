import React from "react";
import Deck from "./Deck";

export default function TelaInicial() {
  const DeckUm = [
    {
      questao: "O que é JSX?",
      resposta: "Uma extensão de linguagem do JavaScript",
    },
    {
      questao: "O React é __",
      resposta: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      questao: "Componentes devem iniciar com __",
      resposta: "letra maiúscula",
    },
    { questao: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    {
      questao: "O ReactDOM nos ajuda __",
      resposta: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      questao: "Usamos o npm para __ ",
      resposta: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      questao: "Usamos props para __",
      resposta: "passar diferentes informações para componentes ",
    },
    {
      questao: "Usamos estado (state) para __",
      resposta:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  DeckUm.sort(embaralhar);

  function embaralhar() {
    return Math.random() - 0.5;
  }

  const [visivel, setVisivel] = React.useState(true);

  function iniciar() {
    setVisivel(!visivel);
  }

  if (visivel === true) {
    return (
      <section className="tela-inicial">
        <img src="./assets/imagens/zap.png" alt="zaprecall" />
        <h1>ZapRecall</h1>
        <button onClick={iniciar}>Iniciar Recall!</button>
      </section>
    );
  } else {
    return <Deck perguntas={DeckUm} />;
  }
}
