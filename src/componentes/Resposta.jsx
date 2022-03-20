import React from "react"

export default function Resposta({resposta,soResposta,questao}){
    console.log("resposta", resposta)

    const [abrirResposta, setAbrirResposta] = React.useState(false)

    if (abrirResposta){
        return (<div   className="pergunta-resposta pergunta-resposta-virada "><p>{resposta} </p>
        <div className="pergunta-resposta-opcoes">
            <button className="opcoes-nao-lembrei">Não Lembrei</button> 
            <button className="opcoes-quase-lembrei">Quase Não Lembrei</button> 
            <button className="opcoes-zap">Zap!       </button>
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