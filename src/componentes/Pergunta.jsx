import React from "react"
import Resposta from "./Resposta"

export default function Pergunta({questao,resposta,index, atualizarContagem}){

    const [abrirPergunta, setAbrirPergunta] = React.useState(false)
    let soResposta = false

    if (abrirPergunta){
        if(soResposta){
            return (<div className="pergunta-questao"><p>{questao} </p>  </div>)
        }else{
            return (<Resposta resposta={resposta} soResposta={soResposta} questao={questao} atualizarContagem={atualizarContagem} />)
        }
    } else {
        return (<div className="pergunta"><p>Pergunta {index + 1}</p> <img onClick={() => setAbrirPergunta(!abrirPergunta)}  src="./assets/imagens/seta.png" alt="ver resposta" />
        </div>)
    }
    
}