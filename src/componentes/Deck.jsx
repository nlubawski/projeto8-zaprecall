import React from 'react'
import Pergunta from "./Pergunta"
import Concluidas from './Concluidas'
import Topo from './Topo'

export default function Deck(){

    const [contagem, setContagem] = React.useState(0)
    const [cartaClicada, setCartaClicada] = React.useState("")

    function clicada(className){
        setCartaClicada(className)
    }

    function atualizarContagem(valor){
        setContagem(contagem + valor)
    }

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

        perguntas.sort(embaralhar)

        
        function embaralhar() { 
            return Math.random() - 0.5; 
        }

    return (
        <>
        <Topo />

        <section className="perguntas">
            {
                perguntas.map( (pergunta,index) => {
                    return <Pergunta key={index} index={index} questao={pergunta.questao} resposta={pergunta.resposta} atualizarContagem={atualizarContagem} clicada={clicada} cartaClicada={cartaClicada}/>} )
            }
        </section>

       <Concluidas contagem={contagem} />
            
        </>
    )
}