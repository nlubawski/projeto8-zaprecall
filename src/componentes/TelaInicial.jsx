import React from "react";
import Deck from "./Deck";

export default function TelaInicial() {
  const [visivel, setVisivel] = React.useState(false);

  function iniciar() {
    setVisivel(!visivel)
  }

  if (visivel === true) {
    return (
      <section className="tela-inicial">
        <img src="./assets/imagens/zap.png" alt="zaprecall" />
        <h1>ZapRecall</h1>
        <button onClick={iniciar}>Iniciar Recall!</button>
      </section>
    );
    
  }else{
    return (<Deck />);
  }
}


