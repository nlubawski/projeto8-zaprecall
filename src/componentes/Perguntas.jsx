import Pergunta from "./Pergunta";

export default function Perguntas({ perguntas, atualizarContagem }) {
  return (
    <section className="perguntas">
      {perguntas.map((pergunta, index) => {
        return (
          <Pergunta
            key={index}
            index={index}
            questao={pergunta.questao}
            resposta={pergunta.resposta}
            atualizarContagem={atualizarContagem}
          />
        );
      })}
    </section>
  );
}
