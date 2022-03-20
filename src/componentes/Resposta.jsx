import React from "react"
import OpcaoDoBotao from "./OpcaoDoBotao"

export default function Resposta({resposta,soResposta,questao, atualizarContagem}){
  
    const [abrirResposta, setAbrirResposta] = React.useState(false)

    if (abrirResposta){
        return (<div   className="pergunta-resposta pergunta-resposta-virada "><p>{resposta} </p>
        <div className="pergunta-resposta-opcoes">
            <OpcaoDoBotao atualizarContagem={atualizarContagem} />
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