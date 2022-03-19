import Pergunta from "./Pergunta"

export default function Deck(){


    const perguntas = [
        {questao: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {questao: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {questao: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
        {questao: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {questao: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {questao: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {questao: "Usamos props para __", resposta: "passar diferentes informações para componentes "},
        {questao: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]

    return (
        <>
        <section className="deck">
            <img src="./assets/imagens/zap.png" alt="zaprecall" />
            <h1>ZapRecall</h1>
        </section >  

        
        <section className="perguntas">
            {
                perguntas.map( (pergunta,index) => {
                    return <Pergunta key={index} index={index} questao={pergunta.questao} resposta={pergunta.resposta} />} )
            }
        </section>

        <section className="barra-inferior">
            0/0 Concluidas
        </section>
            
        </>
    )
}