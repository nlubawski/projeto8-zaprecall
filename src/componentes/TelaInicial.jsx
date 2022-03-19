import React from "react";

export default function TelaInicial() {
  const [visivel, setVisivel] = React.useState(true);

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
    return (<></>);
  }
}


