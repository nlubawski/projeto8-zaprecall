import React from "react";
import Deck from "./Deck";
import Zap from "./../assets/imagens/zap.png"

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

  const DeckDois = [
    {
      questao: "What is JSX?",
      resposta: "A language extension of JavaScript",
    },
    {
      questao: "React is __",
      resposta: "a JavaScript library for building interfaces",
    },
    {
      questao: "Components must start with __",
      resposta: "capital letter",
    },
    { questao: "Can we put __ inside JSX", resposta: "expressions" },
    {
      questao: "Does ReactDOM help us __",
      resposta: "interacting with the DOM to put React components in it",
    },
    {
      questao: "We use npm for __ ",
      resposta: "manage required packages and their dependencies",
    },
    {
      questao: "We use props for __",
      resposta: "pass different information to components",
    },
    {
      questao: "We use state for __",
      resposta:
        "tell React what information when refreshed should render the screen again",
    },
  ];

  function embaralhar() {
    return Math.random() - 0.5;
  }

  const [visivel, setVisivel] = React.useState(true);

  function iniciar() {
    setVisivel(!visivel);
  }

  const [valor, setValor] = React.useState("DeckUm");
  let deck = 0;
  if (valor === "DeckUm") {
    deck = DeckUm;
    deck.sort(embaralhar);
  
  } else {
    deck = DeckDois;
    deck.sort(embaralhar);
  }
  if (visivel === true) {
    return (
      <section className="tela-inicial">
        <img src={Zap} alt="zaprecall" />
        <h1>ZapRecall</h1>
        <select onChange={(valor) => setValor(valor.target.value)}>
          <option value="DeckUm">Deck1</option>
          <option value="DeckDois">Deck2</option>
        </select>

        <button onClick={iniciar}>Iniciar Recall!</button>
      </section>
    );
  } else {
    return <Deck perguntas={deck} />;
  }
}
