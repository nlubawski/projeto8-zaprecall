import React from "react"

export default function Pergunta({questao,resposta,index}){

    const [abrir, setAbrir] = React.useState(false)

    if (abrir){
        return (<div   className="pergunta-questao"><p>{questao} </p> <img src="./assets/imagens/virar.png" alt="abrir pergunta" />
        </div>)
    }else{
        return (<div  onClick={() => setAbrir(!abrir)} className="pergunta"><p>Pergunta {index + 1}</p> <img  src="./assets/imagens/seta.png" alt="ver resposta" />
        </div>)
        
    }
}