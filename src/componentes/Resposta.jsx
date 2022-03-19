import React from "react"

export default function Resposta({resposta,soResposta,questao}){
    console.log("resposta", resposta)

    const [abrirResposta, setAbrirResposta] = React.useState(false)

    if (abrirResposta){
        return (<div   className="pergunta-resposta"><p>{resposta} </p>
        <div>
            <button>verde</button> <button>vermelho</button> <button>amarelo</button>
        </div>
        </div>)
    }else{
        return (
        <div   className="pergunta-resposta"> <p>{questao} </p> 
        <img onClick={() => {
            
            soResposta = true
            setAbrirResposta(!abrirResposta)}} src="./assets/imagens/virar.png" alt="abrir pergunta" />
        </div>)}
 
}